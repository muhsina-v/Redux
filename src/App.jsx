import { useState } from 'react'
import './App.css'

function App() {
  const [count,setcount]=useState(0)

 
function increment(){
  setcount(prevecount => prevecount + 1)
}

function decrement(){
  if(count>0){
  setcount(prevecount=>prevecount-1)
}
}
  return (
    <>
    <p>count:{count}</p>
    <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </>
  )
}

export default App
