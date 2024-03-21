import { memo, useEffect, useState ,useMemo} from "react";
import Prime from "./Prime";
function demoFunc(count){
    console.log("Call this function");
    return `Number of Count ${count}`
}

const Counter=memo(function Counter({ initialCount }){
  console.log("<Counter/> render");
  const demoCountNumber=demoFunc(initialCount)
  const [count, setCount] = useState(initialCount);
//   useEffect(()=>{
//     setCount(initialCount)
//     console.log("useEffect");
//   },[initialCount])
  const handleIncrement = () => {
    // console.log("Click on Increment");
    setCount((preViousState)=>preViousState+1)
  };
  const handleDecrement = () => {
    // console.log("Click on DeIncrement");
    setCount((preViousState)=>preViousState-1)
  };
  
  return (
    <>
      <p>
        Intial value of Counter <strong>{count}</strong>
      </p>
      <button onClick={handleIncrement}>+ Increment</button>
      <button onClick={handleDecrement}>- Decrement</button>
    </>
  );
})
export default Counter;
