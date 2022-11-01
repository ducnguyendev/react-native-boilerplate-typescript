import { put, takeLatest, call } from 'redux-saga/effects'

import { navigateQuestion } from './home.action'
import { navigateToQuestion } from './home.slice'

function* navigateQuestionSaga(
  action: PayloadAction<number>,
): Generator<unknown> {
  try {
    // const result = yield call(getCounterApi)
    console.log('navigateQuestionSaga ', action.payload)

    yield put(navigateToQuestion(action.payload))
  } catch (e) {
    // Error handler
    // yield put(decrementData())
  }
}

export function* homeSagas() {
  yield takeLatest(navigateQuestion.toString(), navigateQuestionSaga)
}
