//对于axiOs进行二次封装
import axios from "axios";
//进度条
import nprogress from "nprogress";
//进度条样式
import "nprogress/nprogress.css";

//利用axios 对象方法创建实例

const requests = axios.create({
    //配置对象
    //基础路径
    baseURL:"/api",
//请求超时时间
    timeout:5000,

});

//请求拦截器，再发请求之前，请求拦截器可以检测到，发出请求之前做一些事情

requests.interceptors.request.use((config)=>{
    //config ：配置对象，对象里面有一个重要属性，header请求头
    nprogress.start();
    return config
});

//相应拦截器
requests.interceptors.response.use((res)=>{
    //成功的回调，数据返回后...
    nprogress.done();
    return res.data;
},(error)=>{
    return Promise.reject(new Error('faile'));
})

export default requests;