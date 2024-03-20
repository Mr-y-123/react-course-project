import { Flex, List, ListItem, Spacer,Text } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import { ContextData } from "../store/DataContextProvider";
const TaskList = ({ taskLists }) => {
   const {handleDeleteTask}=useContext(ContextData)    
  return (
    <div>
      <List spacing={"10px"} h={"500px"} overflowY={"auto"} padding={"10px"}>
        {taskLists.map((task) => (
          <ListItem
            key={task.taskId}
            overflowWrap={"anywhere"}
            fontFamily={"sans-serif"}
            padding={"10px"}
            borderRadius={"3px"}
            _hover={{ backgroundColor: "grey" }}
            cursor={"pointer"}
          >
            <Flex>
              <Text w={'80%'}>{task.task}</Text>
              <Spacer />
              <DeleteIcon onClick={()=>handleDeleteTask(task.taskId)}/>
            </Flex>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TaskList;
