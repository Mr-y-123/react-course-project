import {
  ModalHeader,
  ModalBody,
  Button,
  Text,
  ModalFooter,
  List,
  ModalCloseButton
} from "@chakra-ui/react";

import CartItem from "./CartItem";

const CheckOutCart = ({ items, totalPrice ,handleShowCheckoutCart}) => {
  return (
    <>
      <ModalHeader> Total Items</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <List>
          {items.map((item) => (
            <CartItem key={item.id} props={item} />
          ))}
          <hr />
        </List>
      </ModalBody>
      <ModalFooter display={"flex"} justifyContent={"space-between"}>
        <Text fontWeight={"600"}>Total Price -{totalPrice}</Text>
        {items.length > 0 && (
          <Button className="checkOu-btn" onClick={handleShowCheckoutCart}>
            Checkout
          </Button>
        )}
      </ModalFooter>
    </>
  );
};
export default CheckOutCart;
