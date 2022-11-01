import { AxiosResponse } from 'axios'
import {
  Get24hTickerPriceChangeParamType,
  TickerPriceChangeType,
  GetCoinListParamType,
  ListCoinType,
} from 'interface/market/market.interface'

import { api } from './rootApi.service'

export const getCoinListApi = (
  params: GetCoinListParamType,
): Promise<AxiosResponse<{ data: ListCoinType }>> => {
  return api.get('/api/v3/exchangeInfo', { params })
}

export const get24hTickerPriceChangeApi = (
  params: Get24hTickerPriceChangeParamType,
): Promise<AxiosResponse<{ data: TickerPriceChangeType }>> => {
  return api.get('/api/v3/ticker/24hr', { params })
}
