import { createApp } from 'vue'
import App from './App.vue'
//import './service/axios_demo.ts'
import asRequest from './service'
//import { globalRegister } from './global'

import 'normalize.css'
import './assets/css/index.less'

import router from './router'
import store from './store'

const app = createApp(App)

//app.use(globalRegister)
app.use(router)
app.use(store)
app.mount('#app')
// asRequest.requset(
//     {
//         url: 'home/multidata',
//         method: "GET",
//         interceptors:{
//             requestInterceptor:(config)=>{
//                 return config
//             }
//         }
//     }
// )

interface DataType {
    data: any
    returnCode: string
    success: boolean
  }
  
asRequest.request<DataType>(
    {
        url: 'home/multidata',
        method: "GET",
         showLoading:false
    }
).then((res) => {
    //console.log(res.data)
    //console.log(res.returnCode)
    //console.log(res.success)
  })
