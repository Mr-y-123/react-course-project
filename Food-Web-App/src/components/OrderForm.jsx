import {ModalHeader,ModalCloseButton,ModalBody,FormControl,FormLabel,Input, Heading,ButtonGroup,Button} from '@chakra-ui/react'
import {ArrowBackIcon} from '@chakra-ui/icons'
import { useContext, useState } from 'react'
import {UserProgresContext} from '../store/UserProgresContext'
import {CartContext} from '../store/CartContext'
const OrderForm=({toalamount,Items})=>{

    const [isLoading,setLoading]=useState(false)
    const {handleShowCart}=useContext(UserProgresContext)
    const {handleClearCart}=useContext(CartContext)
    const handleSubmit=async(e)=>{
        e.preventDefault()
       const formData=new FormData(e.target)
       const customerData=Object.fromEntries(formData.entries())
        try{
            setLoading(true)
            const response=await fetch('/api/order',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    order:{
                        Items,
                        customer:customerData
                    }
                })
               })
               setLoading(false)
               if(response.ok){
                    handleShowCart(),
                    handleClearCart()    
               }
        }
        catch(error){
            console.log("Error:",error);
        }
       
    }
    return (
        <>
        <ModalHeader> <ArrowBackIcon onClick={handleShowCart} cursor={'pointer'}/>
            <Heading as={'h2'} size={'md'}> Total Amount :${toalamount}</Heading>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form action="" onSubmit={handleSubmit}>
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
                <Input placeholder='Enter city' type='text' name='city' required/>
            </FormControl>
            <ButtonGroup marginTop={'10px'} display={'flex'} float={'inline-end'}>
                <Button>Cancel</Button>
                <Button className='checkOu-btn' type='submit'>{isLoading?'Loding..':'Order'}</Button>
            </ButtonGroup>
          </form>
        </ModalBody>
        </>
    )
}
export default OrderForm