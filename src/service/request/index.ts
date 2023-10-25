import axios from "axios";
import type { AxiosInstance } from 'axios'
import type { ASRequestConfig, ASRequestInterceptors } from './type'
//import { ElLoading } from 'element-plus'
import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading.js'

//默认不传惨数就显示
const DEAFULT_LOADING = true


class ASRequest {

    instance: AxiosInstance
    interceptors?: ASRequestInterceptors
    showLoading?: boolean
    loading?: LoadingInstance

    constructor(config: ASRequestConfig) {

        // 创建axios实例
        this.instance = axios.create(config)
        // 保存基本信息
        this.interceptors = config.interceptors
        this.showLoading = config.showLoading ?? DEAFULT_LOADING
        // 使用拦截器
        // 1.从config中取出的拦截器是对应的实例的拦截器
        this.instance.interceptors.request.use(
            this.interceptors?.requestInterceptor,
            this.interceptors?.requestInterceptorCatch
        )
        this.instance.interceptors.response.use(
            this.interceptors?.responseInterceptor,
            this.interceptors?.responseInterceptorCatch
        )
        // 添加所有的实例都有的拦截器
        this.instance.interceptors.request.use(
            (config) => {
               // console.log(config)
                if (this.showLoading) {
                    this.loading = ElLoading.service({
                        //  fullscreen:true,
                        lock: true,
                        text: "正在加载中...",
                        background: 'rgba(0,0,0,0.5)',

                    })
                }
                //console.log("所有的实例都有拦截器：请求成功")
                return config
            },
            (err) => {
                //console.log("所有的实例都有拦截器：请求失败")
                return err
            }
        )
        this.instance.interceptors.response.use(
            (res) => {
                //console.log("所有的实例都有拦截器：响应成功")
                setTimeout(() => {
                    this.loading?.close()
                }, 2000);

                return res.data
            },
            (err) => {
                //console.log("所有的实例都有拦截器：响应失败")
                this.loading?.close()
                return err
            }
        )
    }
    request<T>(config: ASRequestConfig<T>): Promise<T> {
        return new Promise((resolve, reject) => {
            // 1.单个请求对请求config的处理
            if (config.interceptors?.requestInterceptor) {
                config = config.interceptors.requestInterceptor(config)
            }
            // 2.判断是否需要显示loading
            if (config.showLoading === !DEAFULT_LOADING) {
                this.showLoading = config.showLoading
            }


            this.instance.request<any, T>(config).then((res) => {
                if (config.interceptors?.responseInterceptor) {
                    // 1.单个请求对数据的处理
                    res = config.interceptors.responseInterceptor(res)
                }
                // 2.将showLoading设置true, 这样不会影响下一个请求
                this.showLoading = DEAFULT_LOADING
                // 3.将结果resolve返回出去
                resolve(res)

            }).catch((err => {
                // 将showLoading设置true, 这样不会影响下一个请求
                this.showLoading = DEAFULT_LOADING
                reject(err)
                return err
            }))
        })
    }

    get<T>(config: ASRequestConfig<T>): Promise<T> {
        return this.request<T>({ ...config, method: 'GET' })
    }

    post<T>(config: ASRequestConfig<T>): Promise<T> {
        return this.request<T>({ ...config, method: 'POST' })
    }

    delete<T>(config: ASRequestConfig<T>): Promise<T> {
        return this.request<T>({ ...config, method: 'DELETE' })
    }

    patch<T>(config: ASRequestConfig<T>): Promise<T> {
        return this.request<T>({ ...config, method: 'PATCH' })
    }
}
    
export default ASRequest;