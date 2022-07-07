import { TypedUseSelectorHook, useSelector } from 'react-redux'

import { Action, configureStore } from '@reduxjs/toolkit'
import { ThunkAction } from 'redux-thunk'

import headerState from './store/header'

export const store = configureStore({
  reducer: {
    headerState,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
