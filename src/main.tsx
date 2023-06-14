import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import theme from './theme.tsx'
import { ThemeProvider } from '@mui/material'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
)
