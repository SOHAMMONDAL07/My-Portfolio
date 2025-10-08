  
import './App.css'
import About from './components/About/About'
import Hero from './components/Hero/Hero.jsx'
import Contact from './components/Contact/Contact'
import Navbar from './components/Navbar/Navbar.jsx'
import Service from './components/Service/Service'
import Footer from './components/Footer/Footer'

function App() {
  

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Service/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
