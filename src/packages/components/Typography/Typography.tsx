import {
  AnchorHTMLAttributes,
  AriaRole,
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
    const CustomTag = `${href ? 'a' : component}`
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

    return (
      <CustomTag
        // @ts-ignore
        className={clsx(
          classes.typography,
          classes[variant ?? componentVariantMap[component]],
          classes[color],
          className,
          {
            [classes.link]: !!href,
          },
        )}
        target={target || '_blank'}
        href={href}
        {...props}
      />
    )
  },
)

Typography.displayName = 'Typography'

export default Typography
