import axios from 'axios'
// 3.axios基本配置
axios.defaults.baseURL = 'http://httpbin.org'
// 1.模拟get请求
axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
  console.log(res.data)
})
// 模拟get请求发送数据
axios
  .get('/get', {
    params: {
      name: 'nane21',
      age: 18
    }
  })
  .then((res) => {
    console.log(res.data)
  })
// axios.request({
//   method: 'GET'
// })
// 2.模拟post
axios
  .post('/post', {
    data: {
      name: 'nane21',
      age: 18
    }
  })
  .then((res) => {
    console.log(res.data)
  })
