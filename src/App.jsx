import React from 'react'
import EmptySection from './components/emptysection/EmptySection'
import Header from './components/header/Header'
import Navigation from './components/navigation/Navigation'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portoflio from './components/portofolio/Portofolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
        <Navigation />
        <Header />
        <About />
        <Experience />
        <Portoflio />
        <Contact />
        <Footer />
    </div>
  )
}

export default App