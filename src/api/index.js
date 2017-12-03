/**
 * Created by SONG on 2017/11/22.
 */
import axios from 'axios'
//增加默认的请求的路径
axios.defaults.baseURL = 'http://localhost:3000';

//获取轮播图数据，返回一个promise对象
export let getSliders = ()=>{
    return axios.get('/sliders')
};

//获取首页热门图书列表
export let getHot = ()=>{
    return axios.get('/hot')
};

//获取所有列表
export let getBooks=()=>{
    return axios.get('/book')
}

//删除某一个图书
export let removeBook = (bookId)=>{
    return axios.delete(`/book?id=${bookId}`)
};

//获取某一本书
export let getOneBook = (id)=>{
    return axios.get(`/book?id=${id}`)
};

//修改图书
export let updataBook = (id,data)=>{
    return axios.put(`book?id=${id}`,data)
};
//添加图书

export let addBook = (data)=>{
    return axios.post(`book`,data)
};
//首页slider和hot都得到后
export let getAll = ()=>{
    return axios.all([getSliders(),getHot()])
};
//根据偏移量 返回对应的数据
export let pagination = (offset)=>{
  return axios.get(`/page?offset=${offset}`)
};