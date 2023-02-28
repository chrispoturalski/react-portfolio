import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from 'react-dom/client'
import App from './App'
import AboutMe from './components/AboutMe'
import PortfolioNavbar from './components/Navbar'
import PortfolioFooter from './components/Footer'
import './styles/App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <PortfolioNavbar />
    <AboutMe />
    <PortfolioFooter />
  </React.StrictMode>,
)
