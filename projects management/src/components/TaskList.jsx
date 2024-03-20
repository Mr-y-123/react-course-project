import { Flex, Input, List, ListItem, Spacer, Text } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useContext, useState } from "react";
import { ContextData } from "../store/DataContextProvider";
const TaskList = ({ taskLists }) => {
  const { handleDeleteTask,handleEditTask } = useContext(ContextData);
  const [edit, setEdit] = useState({editId:'',editValue:''});
  const handleChange=(e)=>{
      setEdit((previosEdit)=>{
        return {...previosEdit,editValue:e.target.value}
      })
  }
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
              {edit.editId===task.taskId ? (
                <Input defaultValue={edit.editValue} onChange={handleChange}/>
              ) : (
                <Text w={"80%"}>{task.task}</Text>
              )}
              <Spacer />
              {edit.editId===task.taskId ? (
                <EditIcon marginLeft={"20px"} onClick={() => {handleEditTask(edit),setEdit({editId:'',editValue:''})} } />
              ) : (
                <>
                  <DeleteIcon onClick={() => handleDeleteTask(task.taskId)} />
                  <EditIcon marginLeft={"20px"} onClick={() => setEdit({editId:task.taskId,editValue:task.task})} />
                </>
              )}
            </Flex>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TaskList;
