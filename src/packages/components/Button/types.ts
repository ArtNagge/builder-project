import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

import { TColor } from '../../types'

export type TVariant = 'filled'

export interface IButton
  extends Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'target'> {
  variant?: TVariant
  color?: TColor
  flex?: boolean
}

type AnchorButtonProps = IButton & AnchorHTMLAttributes<HTMLAnchorElement>
type NativeButtonProps = IButton & ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = Partial<AnchorButtonProps | NativeButtonProps>
