import {
  AnchorHTMLAttributes,
  AriaRole,
  createElement,
  CSSProperties,
  DOMAttributes,
  forwardRef,
  MouseEvent,
} from 'react'

import clsx from 'clsx'

import { TColor } from '../../types'

import { TTypographyComponent, TTypographyVariant } from './types'
import classes from './Typography.module.scss'

interface TypographyProps
  extends Pick<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    'href' | 'target' | 'rel'
  > {
  className?: string
  variant?: TTypographyVariant
  component?: TTypographyComponent
  disabled?: boolean
  color?: TColor
  style?: CSSProperties
  role?: AriaRole
  tabIndex?: number
  onClick?: (e: MouseEvent<HTMLElement>) => void
}

const Typography = forwardRef<
  HTMLElement,
  TypographyProps & DOMAttributes<HTMLElement>
>(
  (
    {
      className = '',
      variant,
      component = 'p',
      color = '',
      href,
      target,
      ...props
    },
    ref,
  ) => {
    const componentVariantMap: Record<
      TypographyProps['component'],
      TypographyProps['variant']
    > = {
      h1: 'rglr',
      h2: 'rglr',
      h3: 'rglr',
      h4: 'rglr',
      h5: 'rglr',
      h6: 'rglr',
      p: 'rglr',
      span: 'rglr',
      div: 'rglr',
      a: 'rglr',
    }

    return createElement(href ? 'a' : component, {
      className: clsx(
        classes.typography,
        classes[variant ?? componentVariantMap[component]],
        classes[color],
        className,
        {
          [classes.link]: !!href,
        },
      ),
      target: target || '_blank',
      href,
      ...props,
    })
  },
)

Typography.displayName = 'Typography'

export default Typography
