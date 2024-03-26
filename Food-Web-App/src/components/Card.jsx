import {
  Card,
  CardBody,
  Image,
  Text,
  Stack,
  CardFooter,
  ButtonGroup,
  Button,
  Heading,
  Divider,
} from "@chakra-ui/react";
import { CartContext } from "../store/CartContext";
import { useContext } from "react";
const Cards = ({ id,name, image, description, price }) => {
  const {handleAddItem}=useContext(CartContext)
  const handleAddItemToCart = () => {
    const item={id,name, image, description, price}
    handleAddItem(item)
  };
  return (
    <Card maxW="sm" color={"white"}>
      <CardBody>
        <Image
          src={`http://localhost:5000/${image}`}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{name}</Heading>
          <Text>{description}</Text>
          <Text fontSize="2xl">${price}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button onClick={handleAddItemToCart}>Add to Cart</Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
export default Cards;
