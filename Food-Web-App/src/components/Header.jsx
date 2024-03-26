import {
  Flex,
  Box,
  Heading,
  Spacer,
  Button,
  FormControl,
  Input
} from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../store/CartContext";
const Header = ({onOpen,onSearch}) => {
   const {items}=useContext(CartContext)
   const totalItemsInCart=items.reduce((total,item)=>{
      total+=item.quantity
      return total
   },0) 
  return (
    <Flex >
      <Box>
        <Heading as={'h1'} size={'lg'} className="Header-Heading">REACTFOOD</Heading>
      </Box>
      <Spacer />
      <Box display={'flex'}>
        <FormControl>
          <Input placeholder="search..." type="text" onChange={onSearch}/>
        </FormControl>
        <Button className="Header-Cart-Button" onClick={onOpen}>Cart({totalItemsInCart})</Button>
      </Box>
    </Flex>
  );
};
export default Header;
