import { PayloadAction } from '@reduxjs/toolkit'
import { put, takeLatest, call } from 'redux-saga/effects'

import { fetchQuestion } from './intro.action'
import {
  fetchQuestionStart,
  fetchQuestionSuccess,
  fetchQuestionFail,
} from './intro.slice'
// fetch

const delay = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time))

function* fetchQuestionSaga(): Generator<unknown> {
  try {
    // const result = yield call(getCounterApi)

    yield put(fetchQuestionStart())

    yield call(delay, 2000)

    yield put(fetchQuestionSuccess())

    // throw 'Error: Handle Error'
  } catch (e: unknown) {
    // Error handler
    yield put(fetchQuestionFail(e as string))
  }
}

export function* introSagas() {
  yield takeLatest(fetchQuestion.toString(), fetchQuestionSaga)
}
