import { FC } from 'react'

import Head from 'next/head'

export const DefaultLayout: FC = ({ children }) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      {children}
    </>
  )
}
