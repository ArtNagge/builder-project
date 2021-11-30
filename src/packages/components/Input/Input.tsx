import { InputHTMLAttributes, useEffect, useRef, useState, VFC } from 'react'

import clsx from 'clsx'

import Typography from '@components/Typography'

import styles from './Input.module.scss'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: Error
  className?: string
  hideArrows?: boolean
  mask?: {
    validator?: string
    options?: Inputmask.Options
  }
}

const Input: VFC<InputProps> = ({
  label,
  value,
  size,
  error,
  mask,
  hideArrows,
  className,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [inFocus, setInFocus] = useState(false)

  useEffect(() => {
    const tempInputRef = inputRef.current
    let _Inputmask: Inputmask.Static = null

    if (!!mask) {
      ;(async () => {
        _Inputmask = (await import('inputmask')).default
      })()
    }

    const handleFocus = () => {
      setInFocus(true)

      if (!!mask && _Inputmask) {
        _Inputmask({
          mask: mask.validator,
          ...mask.options,
          showMaskOnHover: false,
        }).mask(tempInputRef)
      }
    }

    const handleBlur = () => {
      setInFocus(false)
    }

    tempInputRef?.addEventListener('focus', handleFocus)
    tempInputRef?.addEventListener('blur', handleBlur)

    return () => {
      tempInputRef?.removeEventListener('focus', handleFocus)
      tempInputRef?.removeEventListener('blur', handleBlur)
    }
  }, [mask])

  return (
    <div
      className={clsx(
        styles.wrapper,
        {
          [styles.withError]: error,
          [styles.inFocus]: inFocus,
        },
        className,
      )}>
      <label className={styles.label}>
        <Typography
          variant=""
          component="span"
          color=""
          className={styles.labelText}>
          {label}
        </Typography>
        <input
          ref={inputRef}
          className={clsx({
            [styles.input]: true,
            [styles.hideArrows]: props.type === 'number' && hideArrows,
          })}
          value={value}
          {...props}
        />
        {error?.message && (
          <Typography
            variant=""
            component="span"
            color=""
            className={styles.labelTextError}>
            {error.message}
          </Typography>
        )}
      </label>
    </div>
  )
}

export default Input
