import { Provider } from 'react-redux'

import type { AppProps } from 'next/app'

import { store } from '@store/store'

import '@styles/include/_globals.scss'

import { DefaultLayout } from '../layout/default'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </Provider>
  )
}

export default App
