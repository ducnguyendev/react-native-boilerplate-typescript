import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { QuestionType } from 'interface/market/market.interface'

export interface IntroStateProps {
  error: boolean
  errorMessage: string
  loading: boolean
  disabled: boolean
}

const initialState: IntroStateProps = {
  error: false,
  errorMessage: '',
  loading: false,
  disabled: false,
}

export const introSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    fetchQuestionStart: (state) => {
      console.log('fetchQuestionStart ')

      state.loading = true
      state.disabled = true
    },
    fetchQuestionSuccess: (state) => {
      console.log('fetchQuestionSuccess ')

      state.loading = false
      state.disabled = false
    },
    fetchQuestionFail: (state, action: PayloadAction<string>) => {
      console.log('fetchQuestionFail ')

      state.loading = false
      state.error = true
      state.errorMessage = action.payload
      state.disabled = false
    },
  },
})

export const { fetchQuestionSuccess, fetchQuestionStart, fetchQuestionFail } =
  introSlice.actions

export const introReducer = introSlice.reducer
