import { useState, useEffect } from 'react'
import Header from './Components/Header Footer/Header'
import NavBar from './Components/Header Footer/NavBar'
import Newsletter from './Components/Header Footer/Newsletter'
import Footer from './Components/Header Footer/Footer'
import HomePage from './Components/HomePage/HomePage'
function App() {



  return (
    <>
        <Header showSearch = {true}/>
        <NavBar />


        <HomePage />





        <Newsletter />
        <Footer />
    </>
  )
}

export default App
