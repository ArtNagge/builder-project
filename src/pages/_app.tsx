import type { AppProps } from 'next/app'

import '@styles/include/_globals.scss'

import { DefaultLayout } from '../layout/default'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  )
}

export default App
