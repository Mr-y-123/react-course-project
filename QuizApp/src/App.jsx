import { Container } from '@chakra-ui/react'
import './App.css'
import Header from './components/Header'
import { useEffect, useState } from 'react'
import Counter from './components/Counter'
import Main from './components/Main.jsx'
import Prime from './components/Prime.jsx'
function App() {
  console.log('<App/> render')
  const [chosenCount,setChosenCount]=useState(0)
  
  const handleSetCount=(newCount)=>{
    setChosenCount(newCount)
  }

  return (
    <Container  centerContent>
      <Header/>
      <Main  onSet={handleSetCount}/>
      <Counter initialCount={chosenCount} key={chosenCount}/>
    </Container>
  )
}

export default App
