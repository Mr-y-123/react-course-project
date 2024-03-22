import {
  FormControl,
  Input,
  FormLabel,
  Select,
  CheckboxGroup,
  Stack,
  Checkbox,
  FormErrorMessage
} from "@chakra-ui/react";

const FormControls = ({passwordNotMatch,label, ...props }) => {
  
  let content;
  if (props.type === "select") {
    content = (
      <FormControl marginTop={"10px"}>
        <FormLabel>{label}</FormLabel>
        <Select placeholder={props.value[0]} name={props.name}>
          {props.value.map((item)  => (
            <option key={item}>{item}</option>
          ))}
        </Select>
      </FormControl>
    );
  } else if (props.type === "checkbox") {
    content = (
      <FormControl>
        <FormLabel>{label}</FormLabel>
        <CheckboxGroup colorScheme="green" required >
          <Stack spacing={[1, 5]} direction={["row", "column"]}>
            {props.value.map((item) => (
              <Checkbox id={item} value={item} name={props.name} key={item} >
                {item}
              </Checkbox>
            ))}
          </Stack>
        </CheckboxGroup>
      </FormControl>
    );
  } else {
    content = (
      <FormControl marginTop={"10px"} isInvalid={passwordNotMatch}>
        <FormLabel>{label}</FormLabel>
        <Input {...props} required/>
        {passwordNotMatch&&<FormErrorMessage>Password must be match</FormErrorMessage>}
      </FormControl>
    );
  }
  return <>{content}</>;
};
export default FormControls;
