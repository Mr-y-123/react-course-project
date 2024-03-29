import {Heading,Button,Flex,Spacer} from '@chakra-ui/react'
import { useDispatch,useSelector } from 'react-redux'
import { toggle } from '../functionality/slices/cartSlice'
const Header=()=>{
     const dispatch=useDispatch()
     const totalQuantity=useSelector(state=>state.addCart.totalQuantity)
   return (
        <Flex padding={'26px 93px'} backgroundColor={'black'} color={'white'}>
            <Heading>ReduxCart</Heading>
            <Spacer/>
             <Button className='MyCart-button' onClick={()=>dispatch(toggle())}>MyCart <span className='MyCart-count-button'>{totalQuantity}</span></Button>   
        </Flex>
   ) 
}
export default Header