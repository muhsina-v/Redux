
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,reset } from './redux/CounderSlice';
import './App.css'

function App() {
const count=useSelector((state)=>state.counter.count);
const dispatch=useDispatch();


  return (
    <>
    <p >count:{count}</p>
    <button onClick={()=>dispatch(increment())}>increment </button> 
    <button onClick={() =>dispatch(decrement())}> decrement</button>
    <button onClick={() => dispatch(reset())}>Reset</button>
    </>
  )
}

export default App ;
