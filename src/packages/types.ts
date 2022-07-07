import { PropsWithChildren } from 'react'

export type TColor = 'main' | 'white'

export type ReactFCWithChildren<T = unknown> = React.FC<PropsWithChildren<T>>
