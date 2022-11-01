import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface DoneStateProps {
  error: boolean
  errorMessage: string
  loading: boolean
}

const initialState: DoneStateProps = {
  error: false,
  errorMessage: '',
  loading: false,
}

export const doneSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    submitAnswerStart: (state) => {
      console.log('submitAnswerStart ')

      state.loading = true
    },
    submitAnswerSuccess: (state) => {
      console.log('submitAnswerSuccess ')

      state.loading = false
    },
    submitAnswerFail: (state, action: PayloadAction<string>) => {
      console.log('submitAnswerFail ')

      state.loading = false
      state.error = true
      state.errorMessage = action.payload
    },
  },
})

export const { submitAnswerSuccess, submitAnswerStart, submitAnswerFail } =
  doneSlice.actions

export const doneReducer = doneSlice.reducer
