import {
  Container,
  FormControl,
  Input,
  FormErrorMessage,
  FormLabel,
  Heading,
  Button,
} from "@chakra-ui/react";

import { isEmail, passwordLength } from "../utils/validation.js";
import useInput from "../hooks/useInput";
const Login = () => {
  let {
    handleChangeInput: handleChangeEmail,
    handleInputBlur: handleBlurEmail,
    enterdValue: emailValue,
    isValid: isEmailValid,
  } = useInput("", isEmail);
  let  {
    handleChangeInput: handleChangePassword,
    handleInputBlur: handleBlurPassword,
    enterdValue: passwordValue,
    isValid: isPasswordValid,
  } = useInput("", passwordLength);
  const handleSignIn = (e) => {
    e.preventDefault()
    const fd= new FormData(e.target)
    const data=Object.fromEntries(fd.entries())
    console.log(data);
  };
  
  return (
    <Container>
      <form action="" onSubmit={handleSignIn}>
        <Heading as={"h2"} size={"md"}>
          Login Form
        </Heading>
        <FormControl isInvalid={isEmailValid}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            placeholder="enter email"
            name="email"
            onChange={handleChangeEmail}
            onBlur={handleBlurEmail}
            value={emailValue}
          />
          {isEmailValid && (
            <FormErrorMessage>email is invalid</FormErrorMessage>
          )}
        </FormControl>
        <FormControl marginTop={"10px"} isInvalid={isPasswordValid}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            placeholder="enter password"
            name="password"
            onChange={handleChangePassword}
            onBlur={handleBlurPassword}
            value={passwordValue}
          />
          {isPasswordValid && (
            <FormErrorMessage>
              password must be only numbers and not empty
            </FormErrorMessage>
          )}
        </FormControl>
        <Button type="submit" marginTop={"10px"}>
          Login
        </Button>
      </form>
    </Container>
  );
};
export default Login;
