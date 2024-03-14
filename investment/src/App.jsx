import {Container } from "@chakra-ui/react"
import Header  from "./components/Header"
import Main from "./components/Main"
import { useState } from "react"
import { ThemeContext } from "./context/ThemeContext"
import { useContext } from "react"
import Result from "./components/Result"
import './App.css'
function App() {
  const {theme}=useContext(ThemeContext)
  const [values,setValues]=useState({
    initialInvestment:0,
    annualInvestment:0,
    expectedReturn:0,
    duration:0
   })
   const handleChange=(e)=>{
    const {name,value}=e.target
    setValues({...values,[name]:+value})
   }
   console.log("main component");
  // const annualResult=calculationInvestments(values)
  return(
    <Container maxW='container.sm' border={{base:'none',md:'none',lg:'1px solid',}} centerContent marginTop={'100px'} className={theme}>
      <Header/>
      <Main onChange={handleChange} values={values}/>
      <Result values={values}/>
    </Container>
  )
}

export default App
