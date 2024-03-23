import {
  FormControl,
  Input,
  FormLabel,
  Select,
  CheckboxGroup,
  Stack,
  Checkbox,
  FormErrorMessage,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";

const FormControls = ({ passwordNotMatch, label, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  let content;
  if (props.type === "select") {
    content = (
      <FormControl marginTop={"10px"}>
        <FormLabel>{label}</FormLabel>
        <Select placeholder={props.value[0]} name={props.name}>
          {props.value.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </Select>
      </FormControl>
    );
  } else if (props.type === "checkbox") {
    content = (
      <FormControl>
        <FormLabel>{label}</FormLabel>
        <CheckboxGroup colorScheme="green" required>
          <Stack spacing={[1, 5]} direction={["row", "column"]}>
            {props.value.map((item) => (
              <Checkbox id={item} value={item} name={props.name} key={item}>
                {item}
              </Checkbox>
            ))}
          </Stack>
        </CheckboxGroup>
      </FormControl>
    );
  } else if (props.type === "password") {
    props.type = showPassword ? "text" : "password";
    content = (
      <FormControl isInvalid={passwordNotMatch}>
        <FormLabel>{label}</FormLabel>
        <InputGroup size={"md"}>
          <Input {...props} required />
          <InputRightElement>
            <Button
              h="1.75rem"
              size="sm"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        {passwordNotMatch&&<FormErrorMessage>password must be match</FormErrorMessage>}
      </FormControl>
    );
  } else {
    content = (
      <FormControl marginTop={"10px"}>
        <FormLabel>{label}</FormLabel>
        <Input {...props} required />
      </FormControl>
    );
  }
  return <>{content}</>;
};
export default FormControls;
