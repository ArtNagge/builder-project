import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type HeaderState = {
  burger: boolean
  action: boolean
  title: string | null
}

const initialState: HeaderState = {
  burger: false,
  action: false,
  title: null,
}

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    changeTitle: (state, { payload }: PayloadAction<string | null>) => {
      state.title = payload
    },
    changeBurger: (state, { payload }: PayloadAction<boolean>) => {
      state.burger = payload
    },
  },
})

export const { changeTitle, changeBurger } = headerSlice.actions

export const handleChangeTitle = (title: string | null) => async (dispatch) => {
  dispatch(changeTitle(title))
}

export const handleChangeBurger = (burger: boolean) => async (dispatch) => {
  document.body.style.overflow = burger ? 'hidden' : 'auto'

  dispatch(changeBurger(burger))
}

export default headerSlice.reducer
