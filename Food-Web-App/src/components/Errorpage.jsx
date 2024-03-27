import {Heading ,Container,Text} from '@chakra-ui/react'

const Errorpage=()=>{
   return (
    <Container marginTop={'100px'} textAlign={'center'}>
        <Heading as={'h1'} size={'lg'}>Not found data</Heading>
        <Text color={'gray'}>Please found another page</Text>
    </Container>
   )  
}
export default Errorpage