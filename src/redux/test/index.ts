import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from '@store/store'

export interface TestState {
  error?: any
  readyStatus: string
}

const initialState: TestState = {
  readyStatus: 'INVALID',
}

export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    getTestSuccess: (state, { payload }: PayloadAction<any>) => {
      state.readyStatus = 'SUCCESS'
    },
  },
})

export const { getTestSuccess } = testSlice.actions

export const fetchTest = (): AppThunk => async (dispatch, getState) => {
  dispatch(getTestSuccess([]))
}

export default testSlice.reducer
