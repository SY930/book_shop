/**
 * Created by SONG on 2017/11/16.
 */
//专门处理路径用的，以当前路径解析出一个绝对路径，给一个相对路径，转化成一个绝对路径
let path = require('path');
console.log(path.resolve('./dist'));
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    //打包的入口文件，webpack会自动查找相关的依赖进行打包
    entry:'./src/main.js',
    output:{
        //打包后的名字
        filename:'bundle.js',
        //打包后的路径必须是绝对路径
        path:path.resolve('dist'),
    },
    //需要把模块转化为es5,
//    模块的解析规则
//    -js 匹配所有的js 用babel-loader转译 排除掉node_modules，之后build语法还没有转译，还需要告诉翻译官会哪个语法，安装babel-preset-es2015,让翻译官拥有把es6转换为es5的能力，需要配置.babelrc预设，预先设置它会的语法，babel-loader它会找.babelrc里的预设，把语法进行转义
//    babel-preset-stage-0 解析es7语法，在.babelrc里面配置
    module:{
        rules:[
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
        //    解析样式 use时从右往左写,会把css插入到style里面
            {test:/\.css$/,use:['style-loader','css-loader']},

            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
        //    解析图片 file-loader url-loader (是依赖于file-loader)
        //    转化base64只在8129字节下转化，其他情况下输出图片
            {test:/\.(jpg|png|gif)$/,use:'url-loader?limit=8192'},
            {test:/\.(eot|svg|woff|woff2|wtf)$/,use:'url-loader'},
            //vue-loader:把.vue文件解析为模板
            {test:/\.vue$/,use:'vue-loader'}
        ]
    },
//    解析HTML插件 插件有多个所有是plugins:[] 看npm中的Html-Webpack-Plugin，里面有doc文档
//    插件的作用是以我们自己的html为模板将打包后的结果，自动引入到html中产出到dist目录下
    plugins:[
         new HtmlWebpackPlugin({//自动插入到dist目录中
             //使用的模板入口
             template:'./index.html',
             //产出的文件名字，自己可以定义
             // filename:'login.html'
         })
    ]
};
//webpack-dev-server:这里面内置了服务，可以帮我们启动一个端口号8080，当代码更新时可以自动打包(内存中打包)，时刻监控代码，代码有变化就重新执行-->在pack.json加入："webpack-dev-server",执行npm run dev,会执行node_module下的webpack-dev-server的bin文件