import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Like from './like'
import Ludoboad from "./ludoboad"

function App() {
   

  return (
    <>
       <h1>
        State in react
       </h1>
       <Counter/>
       <Like/>
       <Ludoboad/>
    </>
  )
}

export default App
