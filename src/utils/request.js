// 请求模块：封装了 axios
import axios from 'axios'

// axios.default.baseURL 以前这么写，现在用axios.create方法

// 创建 axios 实例
// axios.create 的作用是创建（或者克隆）一个 axios 实例，它的作用和 axios 是一样的，就是复制了一个axios路径，以前的写法只能写一个，如果是多个会比较麻烦
// 假如一个应用中有多个不同的后台接口路径
//   http://api.a.com
//   http://api.b.com

// const request = axios.create({
//     baseURL: 'http://api.a.com'
// })

// const request2 = axios.create({
//     baseURL: 'http://api.b.com'
// })

// axios({
//     method: '',
//     url:'x'
// })

// request({
//     method: '',
//     url:''
// })

// request2({
//     method: '',
//     url:''
// })
// 当然，不仅仅是这个 baseURL,还有例如拦截器等都可以互相独立。
const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn'
})

// 配置 axios
// 请求拦截器
// 响应拦截器
// ……

// 导出请求对象
export default request
