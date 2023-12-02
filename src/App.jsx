import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './component/navbar/navbar'
import HomePage from './component/homepage/homepage'
import Crousal from './component/crousal/crousal'
import Reviews from './component/review/review'
import Footer from './component/footer/footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Navbar/>
     <HomePage/>
     <Crousal/>
     <Reviews/>
     <Footer/>
    </div>
  )
}

export default App
