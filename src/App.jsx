import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import PortfolioNavbar from './components/Navbar'
import AboutMe from './components/AboutMe'
import PortfolioFooter from './components/Footer'
import ContactMe from './components/ContactMe'
import SixProjects from './components/Projects'

function App() {
  return (
    <div>
        <div>
            <PortfolioNavbar />
        </div>
        <div>
            <AboutMe /> 
        </div>
        <div>
            <SixProjects />
        </div>
        <div>
            <ContactMe />
            <PortfolioFooter />
        </div>
    </div>
    )
}

export default App
