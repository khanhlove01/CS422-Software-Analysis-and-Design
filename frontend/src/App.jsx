import { useState } from 'react'
import Home from './pages'
import { NavBar, Footer } from './components/componentsindex'
import "./styles/global.css"

function App() {
  return (
    <div>
        <NavBar/>
        <Home/>
        <Footer/>
    </div>
  )
}

export default App
