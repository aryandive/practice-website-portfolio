import React from 'react'
import './App.css'
import Navbar from '../src/components/Navbar'
import Manager from '../src/components/Manager'
import Footer from '../src/components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <div className='bottom-0'>
        <Manager />
      </div>
      <Footer />
    </>
  )
}

export default App
