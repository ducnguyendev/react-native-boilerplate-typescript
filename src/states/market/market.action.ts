import { createAction } from '@reduxjs/toolkit'
import { GetCoinListParamType } from 'interface/market/market.interface'

export const getCoinList = createAction<GetCoinListParamType>('GET_COIN_LIST')

// export const getCoinList = createAction<GetCoinListParamType>('GET_COIN_LIST')
