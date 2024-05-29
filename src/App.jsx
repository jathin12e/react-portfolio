import React from 'react'
import Home from './components/home'
import Nav from './components/navbar'
import './App.css'
import About from './components/about'
import Project from'./components/project'
import Contact from './components/contact'
import {BrowserRouter} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Home />
        <About />
        <Project />
        <Contact />
      </BrowserRouter>
    </div>
  )
}

export default App