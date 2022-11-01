import { all } from 'redux-saga/effects'

import { authSagas } from './auth/auth.saga'
import { doneSagas } from './done/done.saga'
import { homeSagas } from './home/home.saga'
import { introSagas } from './intro/intro.saga'
import { marketSagas } from './market/market.saga'

export function* rootSaga() {
  yield all([marketSagas(), authSagas(), homeSagas(), introSagas(), doneSagas])
}
