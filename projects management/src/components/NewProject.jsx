import { Container, ButtonGroup, Button } from "@chakra-ui/react";
import Inputs from "./Inputs";
import {useRef} from "react";
import { useContext } from "react";
import { ContextData } from "../store/DataContextProvider";
const NewProject = () => {    
  const {handleAddProject,handleCancel}=useContext(ContextData)
   const title=useRef()
   const description=useRef()
   const dueDate=useRef()
   
   
   const handleSubmit=(e)=>{
        e.preventDefault()
        const enterTitleValue=title.current.value
        const enterDescriptionValue=description.current.value
        const enterDueDateValue=dueDate.current.value
        handleAddProject({title:enterTitleValue,description:enterDescriptionValue,dueDate:enterDueDateValue})
        e.target.reset()
   } 
   
    return (
    <Container>
      <form action="" onSubmit={handleSubmit}>
        <Inputs label={"Title"} placeholder="Enter title" ref={title} required />
        <Inputs
          label={"Description"}
          textarea
          placeholder="Enter description"
          ref={description}
          required
        />
        <Inputs label={"Due Date"} placeholder="Enter due date" ref={dueDate} type='date' required/>
        <ButtonGroup marginTop={"10px"}>
          <Button
            size={"md"}
            className="get-started-btn"
            type="submit"
          >
            Save
          </Button>
          <Button onClick={handleCancel}>Cancel</Button>
        </ButtonGroup>
      </form>
    </Container>
  );
};

export default NewProject;
