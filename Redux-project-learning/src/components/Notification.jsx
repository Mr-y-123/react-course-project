import {Flex,Spacer,Text} from '@chakra-ui/react'
const Notification=({notificationStatus})=>{

    return (
        <Flex  padding={'10px 20px'}>
           <Text>{notificationStatus.status}</Text>
             <Spacer/>   
           <Text>{notificationStatus.message}</Text>     
        </Flex>
    )
}
export default Notification