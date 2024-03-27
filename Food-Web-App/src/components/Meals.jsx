import { Container, Grid, Spinner } from "@chakra-ui/react";
import Cards from "./Card";
import Errorpage from "./Errorpage";
const Meals = ({mealsData,isLoading}) => {
  let content;
  
  if (isLoading) {
    content = (
      <Container centerContent marginTop={'100px'}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Container>
    );
  } else if(mealsData.length>0) {
    content = (
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {mealsData.map((mealsItem) => (
          <Cards key={mealsItem.id} {...mealsItem} />
        ))}
      </Grid>
    );
  }
  else{
    content=<Errorpage/>
  }

  return <>{content}</>;
};
export default Meals;
