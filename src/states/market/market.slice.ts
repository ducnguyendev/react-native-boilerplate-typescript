import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  List24hTickerPriceChangeType,
  ListCoinType,
} from 'interface/market/market.interface'

export interface MarketStateProps {
  loading: boolean
  error: unknown

  listCoin: ListCoinType | null
  list24hTickerPriceChange: List24hTickerPriceChangeType
}

const initialState: MarketStateProps = {
  loading: false,
  error: null,
  listCoin: null,
  list24hTickerPriceChange: {},
}

export const marketSlice = createSlice({
  name: 'market',
  initialState,
  reducers: {
    startGetCoinList: (state) => {
      state.loading = true
      state.error = null
    },
    getCoinListSuccess: (state, action: PayloadAction<ListCoinType>) => {
      state.loading = false
      state.listCoin = action.payload
    },
    upload24hTickerPriceChange: (
      state,
      action: PayloadAction<List24hTickerPriceChangeType>,
    ) => {
      state.list24hTickerPriceChange = action.payload
    },
    getCoinListFail: (state, action: PayloadAction<unknown>) => {
      state.loading = false
      // state.error = action.payload
    },
  },
})

export const {
  startGetCoinList,
  getCoinListSuccess,
  getCoinListFail,
  upload24hTickerPriceChange,
} = marketSlice.actions

export const marketReducer = marketSlice.reducer
