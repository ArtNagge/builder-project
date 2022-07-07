import { useAppSelector } from '@store/store'

export const useBurger = () =>
  useAppSelector(({ headerState }) => headerState.burger)

export const useTitle = () =>
  useAppSelector(({ headerState }) => headerState.title)

export const useAction = () =>
  useAppSelector(({ headerState }) => headerState.action)
