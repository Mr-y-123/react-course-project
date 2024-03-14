
import {
  Grid,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
const Main = ({onChange,values}) => {

  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={6} marginTop={"20px"} padding={{base:'0px 17px',md:'0px',lg:'0px'}}>
      
        <FormControl>
          <FormLabel>Initial Investment</FormLabel>
          <Input
            type="number"
            size={"sm"}
            placeholder="Enter amount"
            width={"auto"}
            variant={"filled"}
            name="initialInvestment"
            defaultValue={values.initialInvestment}
            onChange={onChange}
            required
          />
        </FormControl>
        <FormControl>
          <FormLabel>Annual Investment</FormLabel>
          <Input
            type="number"
            size={"sm"}
            placeholder="Enter amount"
            width={"auto"}
            variant={"filled"}
            name="annualInvestment"
            defaultValue={values.annualInvestment}
            onChange={onChange}
            required
          />
        </FormControl>
        <FormControl>
          <FormLabel>Expected Return</FormLabel>
          <Input
            type="number"
            size={"sm"}
            placeholder="Enter amount"
            width={"auto"}
            variant={"filled"}
            name="expectedReturn"
            onChange={onChange}
            defaultValue={values.expectedReturn}
            required
          />
        </FormControl>
        <FormControl>
          <FormLabel>Duration</FormLabel>
          <Input
            type="number"
            size={"sm"}
            placeholder="Enter Duration"
            width={"auto"}
            variant={"filled"}
            name="duration"
            onChange={onChange}
            defaultValue={values.duration}
            required
          />
        </FormControl>
      
    </Grid>
  );
};

export default Main;
