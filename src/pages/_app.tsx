import 'src/styles/global/app.scss'

import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { StyledEngineProvider } from '@mui/material'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import { resetServerContext } from 'react-beautiful-dnd'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // This use to inject material ui css first, then it can be overridden by custom css (tailwind and sass)
    <StyledEngineProvider injectFirst>
      <DndProvider backend={HTML5Backend}>
        <Component {...pageProps} />
      </DndProvider>
    </StyledEngineProvider>
  )
}

export default appWithTranslation(MyApp)
