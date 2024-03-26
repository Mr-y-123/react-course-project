import {ModalHeader,ModalCloseButton,ModalBody,ModalFooter,FormControl,FormLabel,Input, Heading} from '@chakra-ui/react'
const OrderForm=({toalamount})=>{
    return (
        <>
        <ModalHeader>Order Items
            <Heading as={'h2'} size={'md'}>Total Amount :${toalamount}</Heading>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form action="">
            <FormControl>
                <FormLabel>Full name</FormLabel>
                <Input placeholder='Enter name' type='text' name='fullName' required/>
            </FormControl>
            <FormControl>
                <FormLabel>Email Address</FormLabel>
                <Input placeholder='Enter email-address' type='email' name='email' required/>
            </FormControl>
            <FormControl>
                <FormLabel>Street</FormLabel>
                <Input placeholder='Enter street' type='text' name='street' required/>
            </FormControl>
            <FormControl>
                <FormLabel>Postal Code</FormLabel>
                <Input placeholder='Enter Postal-code' type='text' name='postal-code' required/>
            </FormControl>
            <FormControl>
                <FormLabel>City</FormLabel>
                <Input placeholder='Enter city' type='text' required/>
            </FormControl>
          </form>
        </ModalBody>
        <ModalFooter display={"flex"} justifyContent={"space-between"}>
          
        </ModalFooter>
        </>
    )
}
export default OrderForm