import {
  Card,
  Stack,
  CardFooter,
  CardBody,
  Heading,
  Button,
  Text,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addToCart } from "../functionality/slices/add-cartSlice";
const Shop = ({ shopData }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (shopData) => {
    dispatch(addToCart(shopData));
  };
  return (
    <>
      <Heading as={"h2"} size={"md"} margin={"20px 0px "}>
        BUY YOUR FAVORITE PRODUCTS
      </Heading>
      {shopData.map((item) => (
        <Card w={"500px"} key={item.itemId} marginTop={'10px'}>
          <Stack>
            <CardBody>
              <Flex>
                <Heading size="md">{item.title}</Heading>
                <Spacer />
                <Button>${item.price}</Button>
              </Flex>
              <Text py="2">{item.description}</Text>
            </CardBody>

            <CardFooter>
              <Button
                variant="solid"
                colorScheme="blue"
                onClick={() => handleAddToCart(item)}
              >
                Add to Cart
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      ))}
    </>
  );
};
export default Shop;
