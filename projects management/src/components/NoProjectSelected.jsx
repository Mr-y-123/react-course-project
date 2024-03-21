
import { Heading ,Text,Button,Container} from '@chakra-ui/react'
import { useContext } from 'react'
import { ContextData } from '../store/DataContextProvider'
const NoProjectSelected = () => {
  const {handleNewProject}=useContext(ContextData)
  console.log("<NoProjectSelected/> is Render");
  return (
    <Container centerContent>
        <Heading as={'h2'}>No Project Selected</Heading>
        <Text fontSize={'medium'}>Select a project or started with new one</Text>
        <Button size='md' marginTop={'10px'} className='get-started-btn' onClick={handleNewProject}>Create New project</Button>
    </Container>
  )
}

export default NoProjectSelected