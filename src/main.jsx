import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './MainContent.jsx'
import Header from './HeaderNav.jsx'
import Footer from './FooterNav.jsx'
import HeaderNav from './HeaderNav.jsx'
import MainContent from './MainContent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeaderNav />
    <MainContent />
    <Footer />
  </StrictMode>,
)
