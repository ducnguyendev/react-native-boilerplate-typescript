import {
  authorize,
  refresh,
  logout,
  RefreshResult,
  AuthorizeResult,
  EndSessionResult,
} from 'react-native-app-auth'

const REDIRECT_URL = 'com.apps.weme:/auth2redirect'
const CONFIG = {
  issuer: 'https://weme-dev.azurewebsites.net/',
  clientId: 'WemeMobileApp',
  redirectUrl: REDIRECT_URL,
  scopes: ['openid', 'profile', 'email', 'offline_access', 'wemeApi'],
}

const login = async (): Promise<AuthorizeResult> => {
  try {
    const result = await authorize(CONFIG)

    return Promise.resolve(result)
  } catch (error) {
    return Promise.reject(error)
  }
}

const refreshToken = async (refreshToken: string): Promise<RefreshResult> => {
  try {
    const result = await refresh(CONFIG, {
      refreshToken,
    })

    return Promise.resolve(result)
  } catch (error) {
    return Promise.reject(error)
  }
}

const logoutAccount = async (idToken: string): Promise<EndSessionResult> => {
  try {
    const result = await logout(CONFIG, {
      idToken,
      postLogoutRedirectUrl: REDIRECT_URL,
    })

    return Promise.resolve(result)
  } catch (error) {
    return Promise.reject(error)
  }
}

export const IdentityServerService = { login, refreshToken, logoutAccount }
