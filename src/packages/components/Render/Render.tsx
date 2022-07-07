import React from 'react'

import { ReactFCWithChildren } from '@ts'

import { RenderProps } from './types'

const Render: ReactFCWithChildren<RenderProps> = ({
  children,
  if: ifValue,
  is,
}) => {
  const condition = is === undefined ? !!ifValue : ifValue === is

  return condition && <>{children}</>
}

export default Render
