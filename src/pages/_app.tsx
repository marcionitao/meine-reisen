import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyle from '../styles/global'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Mein Reise</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092b" />
        <meta
          name="description"
          content="A simple project to show my favorite places in Germany and World."
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
