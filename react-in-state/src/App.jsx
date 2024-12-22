import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Like from './like'
import Ludoboad from "./ludoboad"
import TodoList from "./todoList"
import Lottry from './Lottry'
import Ticket from './Ticket'
import Forms from './Forms'
import Comment from './comment'

function App() {
   

  return (
    <>
       <h1>
        State in react
       </h1>
       <Counter/>
       <Like/>
       <Ludoboad/>
       <TodoList/>
       <Lottry/>
       <Forms/>
       <Comment/>
    </>
  )
}

export default App
