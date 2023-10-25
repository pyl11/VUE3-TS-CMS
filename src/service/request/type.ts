import type{AxiosRequestConfig,AxiosResponse} from 'axios'
export interface ASRequestInterceptors{
    requestInterceptor?:(config:AxiosRequestConfig)=>AxiosRequestConfig
    requestInterceptorCatch?:(error:any)=>any
    responseInterceptor?:(res:any)=>any
    responseInterceptorCatch?:(error:any)=>any
}
export interface ASRequestConfig <T = AxiosResponse> extends AxiosRequestConfig{
    interceptors?: ASRequestInterceptors
    showLoading?:boolean
}