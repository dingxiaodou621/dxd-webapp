// 请求模块：封装了 axios
import axios from 'axios'
import JSONbig from 'json-bigint'

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

// 配置处理后端返回的数据中包含超出 JavaScript 安全整数范围问题

// 就是超出的下面这个范围（在浏览器console中输入下面的第一行，返回第二行范围）
// Number.MAX_SAFE_INTEGER
// 9007199254740991
request.defaults.transformResponse = [function (data) {
//  假如 data不是标准的JSON格式的字符串，就报错了
//   return data ? JSONbig.parse(data) : {}
  try {
    // data 数据可能不是标准的 JSON 格式字符串，否则会导致 JSONbig.parse(data) 转换失败报错【参考第18个视频6分之后】
    return JSONbig.parse(data)
  } catch (err) {
    // 无法转换的数据直接原样返回
    return data
  }
}]

// 配置 axios
// 请求拦截器
// 响应拦截器
// ……

// 导出请求对象
export default request
