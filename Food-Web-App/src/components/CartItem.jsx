import { Flex, Text,} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { CartContext } from "../store/CartContext";
import { useContext } from "react";
const CartItem = ({ props }) => {
    const {handleAddItem,handleRemoveItem}=useContext(CartContext)
  return (
    <Flex justifyContent={"space-between"}>
      <Text>{props.name}</Text>
      <Text>${props.price}</Text>
      <div className="action-items-quantity">
        <AddIcon className="AddIcon" onClick={()=>handleAddItem(props)}/>
        <Text>{props.quantity}</Text>
        <MinusIcon className="AddIcon" onClick={()=>handleRemoveItem(props.id)}/>
      </div>

    </Flex>
  );
};
export default CartItem;
