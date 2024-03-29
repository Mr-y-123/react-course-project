import {Container} from '@chakra-ui/react'

const LayOut=({children})=>{
    return (
        <Container centerContent backgroundColor={'rgba(0, 0, 0, 0.829)'} height={'100vh'} maxW={'sm.container'} color={'white'}>{children}</Container>
    )
}
export default LayOut