import { RootState } from '@states/store'

import { MarketStateProps } from './market.slice'

export const marketState = (state: RootState): MarketStateProps => state.market
