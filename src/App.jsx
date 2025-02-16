
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,reset } from './redux/CounderSlice';
import{setName} from "./redux/UserSlice"
import './App.css'
import './index.css'
import ToggleApp from './ToggleApp';

function App() {
const count=useSelector(state=>state.counter.count);
const name = useSelector(state=>state.users.name)
const dispatch=useDispatch();


  return (
    <>
    <ToggleApp />
    <p >count:{count}</p>
    <button onClick={()=>dispatch(increment(5))}>increment </button> 
    <button onClick={() =>dispatch(decrement(5))}> decrement</button>
    <button onClick={() => dispatch(reset())}>Reset</button>
    <p>{name}</p>
    <button onClick={()=>dispatch(setName("jhon"))}>click</button>
    </>
  )
}

export default App ;
