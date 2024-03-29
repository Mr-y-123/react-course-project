import {useSelector,useDispatch} from 'react-redux'
import {increment,decrement,incremetByAmount,toggle} from '../functionality/slices/counterSlice'
import {login,logout} from '../functionality/slices/authSlice'
const CounterApp=()=>{
    const counterValue=useSelector((state)=>state.counter.counter)
    const isAuthenticated=useSelector((state)=>state.auth.isAuthetiCate)
    const show=useSelector((state)=>state.counter.showCounter)
    const dispatch=useDispatch()
    console.log(isAuthenticated);
    return(<>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(toggle())}>toggle</button>
          {show&&<p>{counterValue}</p>}  
         <button onClick={()=>dispatch(incremetByAmount(5))}>Increse by 5</button>  
        <button onClick={()=>dispatch(decrement())}>decrement</button>
        <button onClick={()=>dispatch(isAuthenticated?logout():login())}>{isAuthenticated?'logout':'login'}</button>
    </>)
}
export default CounterApp