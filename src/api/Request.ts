import getConfig from 'next/config'

import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import qs from 'qs'

const { publicRuntimeConfig } = getConfig()

declare module 'axios' {
  interface AxiosResponse<T = any> extends Promise<T> {}
}

export class CountResponse {
  count: number
}

const nodeEnv = publicRuntimeConfig.NODE_ENV || 'development'
const isDev = nodeEnv === 'development'

class Request {
  protected readonly instance: AxiosInstance

  public constructor() {
    this.instance = axios.create({
      baseURL: publicRuntimeConfig.BASE_URL,
      headers: {
        'Content-Type': 'application/json',
        ...(!isDev && { 'Cache-Control': 'no-cache' }),
      },
    })

    // this.setHeader(Cookie.get('accessToken'))

    this._initRequestInterceptors()
  }

  private _initRequestInterceptors = () => {
    this.instance.interceptors.request.use(
      (request: AxiosRequestConfig) => ({
        ...request,
        paramsSerializer: (params) => qs.stringify(params, { indices: false }),
      }),
      (err) => Promise.reject(err),
    )

    // this.instance.interceptors.response.use((response) => {
    //   const { data } = response

    //   if (data.error) {
    //     const { error_code } = data.error

    //     if (error_code >= 3 && error_code <= 5) {
    //       localStorage.removeItem('user')
    //       window.open('/', '_parent')
    //     }

    //     return Promise.reject(data.error)
    //   }

    //   return data.response
    // })
  }

  // private refreshToken = async ({ config }: AxiosError) => {
  //   const { dispatch } = store

  //   dispatch(getRefreshRequesting())

  //   try {
  //     const {
  //       data: { access_token, refresh_token },
  //     } = await Auth.postRefreshTokens()

  //     this.setHeader(access_token)
  //     config.headers['Authorization'] = `Bearer ${access_token}`

  //     Cookie.set('access_token', access_token)
  //     Cookie.set('refresh_token', refresh_token)

  //     return Promise.resolve(dispatch(getRefreshSuccess()))
  //   } catch (error) {
  //     return Promise.reject(dispatch(logoutAuth()))
  //   }
  // }

  public setHeader = (accessToken: string) => {
    this.instance.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${accessToken}`
  }

  public getInstance = () => this.instance
}

export const req = new Request()
export const request = req.getInstance()
