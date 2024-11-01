import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: "#12132A"
    }, secondary: {
      main: "#162446"
    }, tertiary: {
      main: "#C23893"
    },
    subHeadingColor: {
      main: "#962F79"
    }
  },
  typography: {
    h1: { fontSize: "60px", fontWeight: 500, color: "#ffffff", fontFamily: '"Plus Jakarta Sans", sans-serif', },
    p: { fontSize: "18px", fontWeight: 400, color: "#767799", fontFamily: '"Inter",sans-serif' }
  },
})


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
