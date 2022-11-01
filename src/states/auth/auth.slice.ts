import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthorizeResult } from 'react-native-app-auth'

export interface AuthStateProps {
  loading: boolean
  error: unknown

  authendicationData: AuthorizeResult
}

const initialState: AuthStateProps = {
  loading: false,
  error: null,
  authendicationData: {} as AuthorizeResult,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true
      state.error = null
    },
    signInSuccess: (state, action: PayloadAction<AuthorizeResult>) => {
      state.loading = false
      state.authendicationData = action.payload
    },
    signInFail: (state, action: PayloadAction<unknown>) => {
      state.loading = false
      state.error = action.payload
    },

    signOutStart: (state) => {
      state.loading = true
      state.error = null
    },
    signOutSuccess: (state) => {
      state.loading = false
      state.authendicationData = {} as AuthorizeResult
    },
    signOutFail: (state, action: PayloadAction<unknown>) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const {
  signInStart,
  signInSuccess,
  signInFail,

  signOutStart,
  signOutSuccess,
  signOutFail,
} = authSlice.actions

export const authReducer = authSlice.reducer
