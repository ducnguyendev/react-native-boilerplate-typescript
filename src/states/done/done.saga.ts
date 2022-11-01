import { PayloadAction } from '@reduxjs/toolkit'
import { put, takeLatest, call } from 'redux-saga/effects'

import { submitAnswer } from './done.action'
import {
  submitAnswerSuccess,
  submitAnswerStart,
  submitAnswerFail,
} from './done.slice'
// fetch

const delay = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time))

function* submitAnswerSaga(): Generator<unknown> {
  try {
    // const result = yield call(getCounterApi)

    yield put(submitAnswerStart())

    yield call(delay, 2000)

    yield put(submitAnswerSuccess())

    // throw 'Error: Handle Error'
  } catch (e: unknown) {
    // Error handler
    yield put(submitAnswerFail(e as string))
  }
}

export function* doneSagas() {
  yield takeLatest(submitAnswer.toString(), submitAnswerSaga)
}
