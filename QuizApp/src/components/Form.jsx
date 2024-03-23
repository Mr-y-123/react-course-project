import {
  Container,
  Flex,
  Button,
  Spacer,
  Heading,
  Text,
  Box
} from "@chakra-ui/react";
import FormControls from "./FormControls";
import { useState } from "react";
const formInputs = [
  {
    label: "EMAIL",
    type: "text",
    placeholder: "Enter email",
    name: "email",
  },
  {
    label: "PASSWORD",
    type: "password",
    placeholder: "Enter password",
    name: "password",
  },
  {
    label: "CONFIRM PASSWORD",
    type: "password",
    placeholder: "Enter Confirm Password",
    name:"confirm-password",
  },
  {
    label: "FIRST NAME",
    type: "text",
    placeholder: "Enter First Name",
    name:"firstName",
  },
  {
    label: "SECOND NAME",
    type: "text",
    placeholder: "Enter Second Name",
    name:"secondName",
  },
  {
    label:"WHAT BEST DESCRIBES YOUR ROLE ?",
    type:'select',
    name:'selectValue',
    value:['student','professor'],
  },
  {
    label:'How did you find us?',
    type:'checkbox',
    value:['google','instragram','facebook','whatsApp'],
    name:'checkBoxValue'
  }
];
const Form = () => {
   const [passwordNotMatch,setPasswordNotMatch]=useState(false) 
  const handleSubmit = (e) => {
    e.preventDefault()
    const fd=new FormData(e.target)
    const checkBoxData=fd.getAll('checkBoxValue')
    const data=Object.fromEntries(fd.entries())
    data.checkBoxValue=checkBoxData  
    if(data.password!==data['confirm-password']){
      return setPasswordNotMatch(true)
         
    }
    setPasswordNotMatch(false)
     console.log(data);
  };

  return (
    <Container bg={""} borderRadius={"5px"} backgroundColor={"#8743435c"} marginTop={'20px'}>
      <Box marginTop={'25px'}>
        <Heading as={"h3"} size={"md"}>
          Welcome on Board
        </Heading>
        <Text marginTop={'10px'}>We Just need a little bit of data from you to get started</Text>
      </Box>
      <form action="" onSubmit={handleSubmit}>
        {formInputs.map((input) => (
          <FormControls
            key={input.label}
            label={input.label}
            placeholder={input.placeholder}
            type={input.type}
            name={input.name}
            value={input.value}
            passwordNotMatch={passwordNotMatch&&input.name==="confirm-password"}
          />
        ))}
        <Flex margin={"10px 0px"}>
          <Button>Reset</Button>
          <Spacer />
          <Button type="submit">
            Submit
          </Button>
        </Flex>
      </form>
    </Container>
  );
};
export default Form;
