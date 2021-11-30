import { Action, configureStore } from '@reduxjs/toolkit'
import { ThunkAction } from 'redux-thunk'

import testReducer from './test'

export const store = configureStore({
  reducer: {
    testReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>
