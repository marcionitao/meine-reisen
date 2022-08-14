import type { AppProps } from 'next/app'
import Head from 'next/head'

import NProgress from 'nprogress'
import { useEffect } from 'react'

import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'

import { useRouter } from 'next/router'
import GlobalStyle from '../styles/global'

NProgress.configure({
  showSpinner: false,
  trickleSpeed: 200
})

export default function MyApp({ Component, pageProps }: AppProps) {
  // quando mudar de rota, o nprogress é iniciado
  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeStart', () => NProgress.start())
    router.events.on('routeChangeComplete', () => NProgress.done())
    router.events.on('routeChangeError', () => NProgress.done())
  }, [])
  //
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"
          integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ=="
          crossOrigin=""
        />
        <meta name="theme-color" content="#06092b" />
      </Head>
      <DefaultSeo {...SEO} />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
