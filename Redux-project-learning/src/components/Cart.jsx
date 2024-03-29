import {
  Card,
  Stack,
  CardBody,
  Flex,
  Box,
  Heading,
  Spacer,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import {useDispatch} from 'react-redux'
import {addToCart,removeToCart} from '../functionality/slices/add-cartSlice' 
import {CloseIcon} from '@chakra-ui/icons'
const Cart = ({cartData}) => {
  const dispatch=useDispatch()
  const handleremoveToCart=(itemId)=>{
    dispatch(removeToCart(itemId))
  }
  const handleAddToCart=(item)=>{
    dispatch(addToCart(item))
  }
  return (
    <Card w={"500px"} backgroundColor={'black'} color={'white'} marginTop={'10px'}>
      <Stack>
        <CardBody>
          <Heading as={"h1"} size="md">
            The perfect latte
          </Heading>
          <Box >
            <Flex marginTop={"20px"}>
              <Heading as={"h2"} size={"md"}>
                {cartData.name}
              </Heading>
              <Spacer />
              <Heading as={"h2"} size={"md"}>
                ${cartData.totalPrice}
              </Heading>
            </Flex>
            <Flex marginTop={"20px"}>
              <Heading as={"h3"} size={"md"}>
                  <CloseIcon width={'10px'}/>  {cartData.quantity}
              </Heading>
              <Spacer />
              <ButtonGroup>
                <Button onClick={()=>handleremoveToCart(cartData.itemId)}>-</Button>
                <Button onClick={()=>handleAddToCart(cartData)}>+</Button>
              </ButtonGroup>
            </Flex>
          </Box>
        </CardBody>
      </Stack>
    </Card>
  );
};
export default Cart;
