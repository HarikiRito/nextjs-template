import 'src/styles/global/app.scss'

import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // This use to inject material ui css first, then it can be overridden by custom css (tailwind and sass)
    <Component {...pageProps} />
  )
}

export default appWithTranslation(MyApp)
