import { Container } from '@chakra-ui/react'
import './App.css'
import Header from './components/Header'
// import Counter from './components/Counter'
// import Main from './components/Main.jsx'
// import {useState } from 'react'
// import useFetch from './hooks/useFetch.js'
import Form from './components/Form'
import Login from './components/Login'
function App() {
  console.log('<App/> render')
  // const [chosenCount,setChosenCount]=useState(0)
  // const places=useFetch()
  // console.log(places);
  // const handleSetCount=(newCount)=>{
  //   setChosenCount(newCount)
  // }

  return (
    <Container  centerContent marginTop={'50px'}>
      <Header/>
      <Login/>
      { /*<Main  onSet={handleSetCount}/>
      <Counter initialCount={chosenCount} key={chosenCount}/> */}
    </Container>
  )
}

export default App
