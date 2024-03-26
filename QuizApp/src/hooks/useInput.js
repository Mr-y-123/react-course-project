import { useState } from "react"
const useInput=(defaultValue,validFunc)=>{
  const [enterdValue,setEnterdValue]=useState(defaultValue) 
  const [didEdit,setDidEdit]=useState(false)
  
  const handleChangeInput=(e)=>{
    setEnterdValue(e.target.value)
    setDidEdit(false)
  }
  const handleInputBlur=()=>{
    setDidEdit(true)
  }

  const isValid=didEdit&&validFunc(enterdValue)
  
  return {handleChangeInput,handleInputBlur,enterdValue,isValid}
}
export default useInput