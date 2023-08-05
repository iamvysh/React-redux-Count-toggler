
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { add,reset,substract } from './Redux/CountSlice'

function App() {



  const dispatch=useDispatch()
  const count=useSelector((state)=>state.count.count)
  

  return (
    <>


    <h1>count :{count}</h1>

    <button onClick={()=>dispatch(add())}>increment</button>

    <button onClick={()=>dispatch(substract())}>decrement</button>

    <button   onClick={()=>dispatch(reset())}>reset</button>

    




     
    </>
  )
}

export default App
