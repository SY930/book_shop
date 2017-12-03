/**
 * Created by SONG on 2017/11/22.
 */
let http = require('http');
let url = require('url');
let fs = require('fs');
let sliders = require('./sliders');
function read(cb) {
    fs.readFile('./book.json','utf-8',function (err,data) {
        if(err||data.length===0){
            cb([])
        }else {
            cb(JSON.parse(data))
        }
    })
}
function write(data,cb) {

    fs.writeFile('./book.json',JSON.stringify(data),cb)
}
let pageSize = 5;
http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.setHeader("X-Powered-By",' 3.2.1');
    if(req.method=="OPTIONS") return res.end();/*让options请求快速返回*/
    let {pathname, query} = url.parse(req.url,true);
    console.log(pathname);
    if(pathname==='/page'){
        console.log(query);
        let offset = parseInt(query.offset)||0;

        read(function (books) {
            let result=books.reverse().slice(offset,offset+pageSize);//数据倒叙
            console.log(result);
            let hasMore = true;
            if(books.length<=offset+pageSize){
                hasMore = false
            }
            res.setHeader('Content-Type','application/json;charset=utf8');
            res.end(JSON.stringify({hasMore,books:result}))
        })
    }
    if (pathname ==='/sliders') {
        res.end(JSON.stringify(sliders));
        return
    }
    if(pathname==='/hot'){
        read(function (books) {
            let hot = books.reverse().slice(0,6)
            res.setHeader('Content-Type','application/json;charset=utf8')
            res.end(JSON.stringify(hot))
        })
        return
    }

    if(pathname==='/book'){
        let id = parseInt(query.id);
        switch (req.method){
            case 'GET':
                if(!isNaN(id)){
                    read(function (books) {
      let book= books.find(item=>item.bookId===id);
      if(!book) book = {};//如果没找到则是undefined
                        res.setHeader('Content-type','application/json;charset=utf8');
                        res.end(JSON.stringify(book))

                    })
                }else {
                    read(function (books) {
                        res.setHeader('Content-type','application/json;charset=utf8');
                        res.end(JSON.stringify(books.reverse()))
                    })
                }
                break;
            case 'POST':
                let str = '';
                req.on('data',function (chuck) {
                str+=chuck;
                });
                req.on('end',function () {
           let book = JSON.parse(str);
           read(function (books) {
               book.bookId = books.length?books[books.length-1].bookId+1:1;
               // console.log(book);
               books.push(book);
               write(books,function () {
  res.end(JSON.stringify(book));
               })
           })
                });
                break;
            case 'PUT':
                if(id){//获取当前要修改的id
                    let str = '';
                    req.on('data',function (chuck) {
                        str+=chuck
                    });
                    req.on('end',function () {
           let book = JSON.parse(str);
           read(function (books) {
           books=books.map(item=>{
               if(item.bookId==id){
                   return book;
               }
               return item;
           });
               write(books,function () {
  res.end(JSON.stringify(book))
               })
           });
                    })
                }
                break;
            case 'DELETE':
                read(function (books) {
                   books = books.filter(item=>item.bookId!=id);
                   write(books,function () {
                       res.end(JSON.stringify({}))
                   })
                });
                break
        }

    }
}).listen(3000,()=>{
    console.log('端口已启动');});