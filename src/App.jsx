import { useState, useEffect } from 'react'
import Header from './Components/Header Footer/Header'
import NavBar from './Components/Header Footer/NavBar'
import Newsletter from './Components/Header Footer/Newsletter'
import Footer from './Components/Header Footer/Footer'
import Section_Main from './Components/HomePage/Section_Main'
import HomeOutDoor from './Components/HomePage/HomeOutDoor'

function App() {



  return (
    <>
        <Header showSearch = {true}/>
        <NavBar />


        
        <Section_Main />
        <HomeOutDoor/>





        <Newsletter />
        <Footer />
    </>
  )
}

export default App
