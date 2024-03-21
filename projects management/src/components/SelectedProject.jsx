import { useContext } from 'react'
import { ContextData } from '../store/DataContextProvider'
import Task from './Task';
import {
  
  Card,
  CardBody,
  Text,
  Flex,
  Heading,
  Button,
  Spacer,
} from "@chakra-ui/react";
const SelectedProject = ({ selectedProject}) => {
  const {handleDeleteProject}=useContext(ContextData)
  console.log("<SelectedProject/> is Render");
   const formateDate=new Date(selectedProject.dueDate).toLocaleDateString('en-US',{
    year:"numeric",
    month:"short",
    day:"numeric"
   }) 

  return (
    <Card w={"70%"}>
      <CardBody>
        <Flex>
          <Heading size="md">{selectedProject.title}</Heading>
          <Spacer />
          <Button onClick={()=>handleDeleteProject(selectedProject.id)}>Delete</Button>
        </Flex>
        <Text color={"gray"}>{formateDate}</Text>
        <CardBody>
          <Text>{selectedProject.description}</Text>
        </CardBody>
        <hr />
        <Task/>
      </CardBody>
    </Card>
  );
};

export default SelectedProject;
