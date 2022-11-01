import { combineReducers } from '@reduxjs/toolkit'

import { authReducer } from './auth/auth.slice'
import { doneReducer } from './done/done.slice'
import { homeReducer } from './home/home.slice'
import { introReducer } from './intro/intro.slice'
import { marketReducer } from './market/market.slice'

// TO-DO: configs PersistReducer

export const rootReducer = combineReducers({
  market: marketReducer,
  home: homeReducer,
  auth: authReducer,
  intro: introReducer,
  done: doneReducer,
})
