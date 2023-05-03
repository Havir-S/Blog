import Head from 'next/head'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Router from 'next/router'

import ProgressBar from '@badrap/bar-of-progress'


///TEST

const progress = new ProgressBar({
  size: 6,
  color: '#514538',
  className: 'z-50',
  delay: 100,
})

Router.events.on('routeChangeStart', progress.start)
Router.events.on('routeChangeComplete', progress.finish)
Router.events.on('routeChangeError', progress.finish)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  )
}

export default MyApp
