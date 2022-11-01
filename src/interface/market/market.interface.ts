import { int32ARGBColor } from 'react-native-svg'

export interface GetCoinListParamType {
  symbol?: string
  symbols?: string
}

export interface Get24hTickerPriceChangeParamType {
  symbol?: string
}

export enum RateLimitType {
  RequestWeight = 'REQUEST_WEIGHT',
  Orders = 'ORDERS',
  RawRequest = 'RAW_REQUESTS',
}

export enum Interval {
  Second = 'SECOND',
  Minute = 'MINUTE',
  Day = 'DAY',
}

export interface RateLimit {
  rateLimitType: RateLimitType
  interval: Interval
  intervalNum: number
  limit: number
}

export interface SymbolType {
  symbol: string
  status: string
  baseAsset: string
  baseAssetPrecision: number
  quoteAsset: string
  quotePrecision: number
  quoteAssetPrecision: number
  baseCommissionPrecision: number
  quoteCommissionPrecision: number
  orderTypes: string[]
  icebergAllowed: boolean
  ocoAllowed: boolean
  quoteOrderQtyMarketAllowed: boolean
  allowTrailingStop: boolean
  isSpotTradingAllowed: boolean
  isMarginTradingAllowed: boolean
  filters: unknown[]
  permissions: string[]
}

export interface ListCoinType {
  timezone: string
  serverTime: number
  rateLimits: RateLimit[]
  exchangeFilters: unknown[]
  symbols: SymbolType[]
}

export interface TickerPriceChangeType {
  symbol: string
  priceChange: string
  priceChangePercent: string
  weightedAvgPrice: string
  prevClosePrice: string
  lastPrice: string
  lastQty: string
  bidPrice: string
  bidQty: string
  askPrice: string
  askQty: string
  openPrice: string
  highPrice: string
  lowPrice: string
  volume: string
  quoteVolume: string
  openTime: number
  closeTime: number
  firstId: number
  lastId: number
  count: number
}

export interface List24hTickerPriceChangeType {
  [key: string]: TickerPriceChangeType
}

export interface QuestionType {
  id: number
  question: string
}

export interface ListQuestion {
  [key: number]: QuestionType
}

