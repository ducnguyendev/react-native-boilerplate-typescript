import { PayloadAction } from '@reduxjs/toolkit'
import {
  GetCoinListParamType,
  ListCoinType,
  TickerPriceChangeType,
} from 'interface/market/market.interface'
import { put, takeLatest, call, all } from 'redux-saga/effects'

import {
  get24hTickerPriceChangeApi,
  getCoinListApi,
} from '@services/api/market.service'

import { getCoinList } from './market.action'
import {
  startGetCoinList,
  getCoinListSuccess,
  getCoinListFail,
  upload24hTickerPriceChange,
} from './market.slice'

function* getCoinListSaga(
  action: PayloadAction<GetCoinListParamType>,
): Generator<unknown, any, { data: ListCoinType }> {
  try {
    yield put(startGetCoinList())
    const result = yield call(getCoinListApi, action.payload)

    yield call(
      getList24hTickerPriceChange,
      result.data.symbols.map((data) => data.symbol),
    )

    yield put(getCoinListSuccess(result.data))
  } catch (e) {
    yield put(getCoinListFail('Error happen'))
  }
}

function* getList24hTickerPriceChange(
  symbols: string[],
): Generator<unknown, any, { data: TickerPriceChangeType }[]> {
  try {
    const arrayAction = symbols.map((symbol) => {
      return call(get24hTickerPriceChangeApi, { symbol })
    })

    const arrayResult = yield all(arrayAction)

    console.log('getCoinListSaga arrayResult ', arrayResult)
    const convertData = arrayResult.reduce((data, currentValue) => {
      data = {
        ...data,
        [currentValue.data.symbol]: currentValue.data,
      }
      console.log('getCoinListSaga data ', data)
      return data
    }, {})

    yield put(upload24hTickerPriceChange(convertData))
  } catch (e) {
    yield put(getCoinListFail(e))
  }
}

export function* marketSagas() {
  yield takeLatest(getCoinList.toString(), getCoinListSaga)
}
