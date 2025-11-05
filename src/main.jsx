import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/main.scss'
import Signup from './pages/signup'
import Login from './pages/login'
import Footer from './components/Footer'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
    <Footer />
  </StrictMode>
)
