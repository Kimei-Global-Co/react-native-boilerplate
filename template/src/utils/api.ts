import ky, { HTTPError, type Options } from 'ky'

import { API_CONFIG } from './config'

export type Primitive =
  | null
  | undefined
  | string
  | number
  | boolean
  | symbol
  | bigint

export type LiteralUnion<
  LiteralType extends BaseType,
  BaseType extends Primitive
> = LiteralType | (BaseType & { _?: never })

type HttpMethod = 'get' | 'post' | 'put' | 'patch' | 'head' | 'delete'

export type KyHeadersInit =
  | NonNullable<RequestInit['headers']>
  | Record<string, string | undefined>

export interface ApiParams {
  url: string
  method: LiteralUnion<HttpMethod, string>
  data?: unknown
  unmountSignal?: AbortSignal
  headers?: KyHeadersInit
  responseType?: string
}

const api = async <T>({
  url,
  method,
  data,
  unmountSignal,
  headers,
  ...rest
}: ApiParams): Promise<T> => {
  // const accessToken = persistedState.getAccessToken()

  const options: Options = {
    method,
    retry: 0,
    signal: unmountSignal,
    prefixUrl: API_CONFIG.baseURL,
    json: data,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...headers
    },
    // hooks: {
    //   beforeRequest: [
    //     (request) => {
    //       if (accessToken)
    //         request.headers.set('Authorization', `Bearer ${accessToken}`)
    //     }
    //   ],
    //   afterResponse: [
    //     async (request, _, response) => {
    //       if (response.status === 401) {
    //         try {
    //           const sealedRefreshToken = persistedState.getRefreshToken()
    //           if (!sealedRefreshToken) {
    //             persistedState.clearAllPersistedState()
    //             throw new Error('No refresh token available')
    //           }

    //           const refreshResponse = await ky
    //             .get(
    //               `${API_CONFIG.baseURL}${API_CONFIG.endpoints.REFRESH_TOKEN}`,
    //               {
    //                 headers: { Authorization: `Bearer ${sealedRefreshToken}` }
    //               }
    //             )
    //             .json<TokenResponse>()

    //           const { acceptToken, refreshToken: _refreshToken } =
    //             refreshResponse?.data ?? {}

    //           if (!acceptToken || !_refreshToken)
    //             throw new Error('Invalid refresh token response')

    //           persistedState.setAccessToken(acceptToken)
    //           persistedState.setRefreshToken(_refreshToken)

    //           const updatedRequest = request.clone()
    //           updatedRequest.headers.set(
    //             'Authorization',
    //             `Bearer ${acceptToken}`
    //           )

    //           return await ky(updatedRequest)
    //         } catch (refreshError: unknown) {
    //           persistedState.clearAllPersistedState()
    //           throw new Error(
    //             `Failed to refresh tokens: ${
    //               refreshError instanceof Error
    //                 ? refreshError.message
    //                 : String(refreshError)
    //             }`
    //           )
    //         }
    //       }
    //       return response
    //     }
    //   ]
    // },
    ...rest
  }

  try {
    const response = await ky(url, options)
    return await response.json<T>()
  } catch (error) {
    if (__DEV__) console.log('Failed request:', { url, ...options, error })
    if (error instanceof HTTPError) {
      const errorData = await error.response.json().catch(() => ({}))
      if (error.response.status >= 500)
        console.log('Máy chủ gặp sự cố, vui lòng thử lại sau.')
      if (errorData) throw new Error(errorData?.error?.message ?? error.message)
    }
    throw error
  }
}

export default api
