import React from 'react'
import Navbar from './components/navbar'
import Home from './components/home'
import {Route, Routes} from 'react-router-dom'
import About from './components/about'
import Contact from './components/contact'
import Login from './components/Login'
import Signup from './components/Sign-up'
import Logout from './components/logout'
const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>


      <Route index path ="/" element ={<Home/>}/>

      <Route path ="/about" element = {<About/>}/>

      <Route path="/contact" element = {<Contact/>}/>

      <Route path="/login" element = {<Login/>}/>


      <Route path="/Sign-up" element ={<Signup/>}/>

      <Route path="/logout" element ={<Logout/>}/>
      
      <Route path="/*" element ={<p>  Error Page Not Found </p>}/>




      </Routes>
      
    </>
  )
}

export default App
