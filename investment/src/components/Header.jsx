import { Heading, Image, Switch, FormControl } from "@chakra-ui/react";
import image from "../assets/pngimg.com - dollar_sign_PNG21539.png";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
const Header = () => {
  const {setTheme}=useContext(ThemeContext)
  
  const handleChange=(e)=>{
    if(e.target.checked){
      setTheme('light')
    }
    else{
      setTheme('dark')
    }
  }
  return (
    <>
      <FormControl display="flex" flexDirection={'row-reverse'} marginTop={'10px'}>
        <Switch id="email-alerts" onChange={handleChange} />
      </FormControl>
      <Image boxSize="200px" objectFit="cover" src={image} alt="Dan Abramov" />
      <Heading as={"h3"} color={{base:'red',md:'black',lg:'green'}}>Investment Calculator</Heading>
    </>
  );
};
export default Header;
