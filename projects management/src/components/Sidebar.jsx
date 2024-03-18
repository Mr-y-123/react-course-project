import { Heading, GridItem, Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useContext } from 'react'
import { ContextData } from '../store/DataContextProvider'
const Sidebar = ({children}) => {
  const {handleNewProject}=useContext(ContextData)
  return (
    <GridItem
      rowSpan={2}
      colSpan={1}
      bg="black"
      color={"white"}
      padding={"25px"}
      borderRadius={'0px 50px 0px 0px'}
    >
      <aside>
        <Heading as='h1' size={'lg'}>YOUR PROJECTS</Heading>
        <Button size="md" marginTop={'20px'} onClick={handleNewProject} leftIcon={<AddIcon/>}>
            Add Project
        </Button>
        {children}
      </aside>
    </GridItem>
  );
};
export default Sidebar;
