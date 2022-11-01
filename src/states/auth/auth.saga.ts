import { AuthorizeResult } from 'react-native-app-auth'
import { put, takeLatest, call, select, StrictEffect } from 'redux-saga/effects'

import { IdentityServerService } from '@services/identity-server.service'

import { signIn, signOut } from './auth.action'
import { authState } from './auth.selector'
import {
  signInStart,
  signInSuccess,
  signInFail,
  signOutStart,
  signOutSuccess,
  signOutFail,
  AuthStateProps,
} from './auth.slice'

function* signInSaga(): Generator<StrictEffect, void, AuthorizeResult> {
  try {
    yield put(signInStart())
    const result = yield call(IdentityServerService.login)

    yield put(signInSuccess(result))
  } catch (e) {
    yield put(signInFail(e))
  }
}

function* signOutSaga(): Generator<StrictEffect, void, AuthorizeResult> {
  try {
    yield put(signOutStart())

    const auth = (yield select(authState)) as unknown as AuthStateProps

    yield call(
      IdentityServerService.logoutAccount,
      auth.authendicationData.idToken,
    )

    yield put(signOutSuccess())
  } catch (e) {
    yield put(signOutFail(e))
  }
}

export function* authSagas() {
  yield takeLatest(signIn.toString(), signInSaga)
  yield takeLatest(signOut.toString(), signOutSaga)
}
