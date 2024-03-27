import {
  Modal,
  ModalOverlay,
  ModalContent,
} from "@chakra-ui/react";

import { useContext } from "react";
import { CartContext } from "../store/CartContext";
import { createPortal } from "react-dom";
import { UserProgresContext } from "../store/UserProgresContext";
import OrderForm from "./OrderForm";
import CheckOutCart from "./CheckOutcart";
const Model = ({ onClose, isOpen }) => {
  const { items } = useContext(CartContext);
  const { ProgressStatus, handleShowCheckoutCart } =
    useContext(UserProgresContext);

  const totalPrice = items.reduce((price, item) => {
    price += item.price * item.quantity;
    return price;
  }, 0);

  let content;
  if (ProgressStatus === "cart") {
    content = (
      <CheckOutCart
        totalPrice={totalPrice}
        items={items}
        handleShowCheckoutCart={handleShowCheckoutCart}
      />
    );
  } else if (ProgressStatus === "checkOut") {
    content = <OrderForm toalamount={totalPrice} Items={items}/>;
  }

  return createPortal(
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>{content}</ModalContent>
    </Modal>,
    document.getElementById("model")
  );
};
export default Model;
