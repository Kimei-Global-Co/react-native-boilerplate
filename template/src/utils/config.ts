export const API_CONFIG = {
  baseURL: process.env.EXPO_PUBLIC_API_URL ?? 'https://example.com',
  endpoints: {
    //#region
    LOGIN: '',
    REFRESH_TOKEN: '',
    RESET_PASSWORD: '',
    USER_INFO: ''

    //#endregion
  }
} as const
