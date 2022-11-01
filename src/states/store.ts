import AsyncStorage from '@react-native-async-storage/async-storage'
import { configureStore } from '@reduxjs/toolkit'
import createDebugger from 'redux-flipper'
import { persistReducer } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'

import { rootReducer } from './rootReducers'
import { rootSaga } from './rootSagas'

const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['home', 'intro'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    if (__DEV__) {
      return getDefaultMiddleware({ serializableCheck: false })
        .concat(sagaMiddleware)
        .concat(createDebugger())
    } else {
      return getDefaultMiddleware().concat(sagaMiddleware)
    }
  },
})

sagaMiddleware.run(rootSaga)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
