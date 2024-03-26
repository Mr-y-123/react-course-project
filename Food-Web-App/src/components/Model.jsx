import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  List,
  Text,
  Heading,
} from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../store/CartContext";
import { createPortal } from "react-dom";
import CartItem from "./CartItem";
import { UserProgresContext } from "../store/UserProgresContext";
import OrderForm from "./OrderForm";
const Model = ({ onClose, isOpen }) => {
  const { items} = useContext(CartContext);
  const { ProgressStatus,handleShowCheckoutCart}=useContext(UserProgresContext)

  const totalPrice = items.reduce((price, item) => {
    price += item.price * item.quantity;
    return price;
  }, 0);
  console.log(ProgressStatus);
  let content
  if(ProgressStatus==='cart'){
    content=<>
        <ModalHeader>Total Items</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <List>
            {
              items.map((item)=><CartItem key={item.id} props={item}/>)
            }
            <hr />
          </List>
        </ModalBody>
        <ModalFooter display={"flex"} justifyContent={"space-between"}>
          <Text fontWeight={"600"}>Total Price -{totalPrice}</Text>
          {items.length>0&&<Button className="checkOut-btn" onClick={handleShowCheckoutCart}>Checkout</Button>}
        </ModalFooter>
    </>
  }
  else if(ProgressStatus==='checkOut'){
    content=<OrderForm toalamount={totalPrice}/>
  }



  return createPortal(
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        {content}
      </ModalContent>
    </Modal>,
    document.getElementById("model")
  );
};
export default Model;
