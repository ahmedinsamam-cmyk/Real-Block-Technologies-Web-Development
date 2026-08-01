import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Root } from './components/Root'
import { LocaleProvider } from './components/LocaleProvider'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LocaleProvider>
      <Root />
    </LocaleProvider>
  </StrictMode>,
)
