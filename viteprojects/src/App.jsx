import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
// let counter = 15
let [ counter , setCounter] = useState(0)
const addValue = ()=> {
  counter += 1
  setCounter(counter)

}
const subValue = () =>{
  setCounter(counter -1 )
}

  return (
    <>
    <h1>  Counting </h1>
    <h2>counter value: {counter}</h2>
    <span> <button onClick={addValue} >Add Value 👆</button> </span>
    <button onClick={subValue}>Subtract Value 👇</button>

    </>
  )
}

export default App
