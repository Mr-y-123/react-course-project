import {
  Container,
  Flex,
  Heading,
  Button,
  Spacer,
  Input,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import React, { useState, useContext } from "react";
import { ContextData } from "../store/DataContextProvider";
import TaskList from "./TaskList";
const Task = () => {
  const [showInput, setShowInput] = useState(false);
  const [taskValue, setTaskValue] = useState("");
  const { projects, handleAddTask } = useContext(ContextData);
  const taskLists=projects.tasks?.filter((task)=>task.projectId===projects.selectedProjectId)
//   console.log(taskLists);
  const handleShowInput = () => {
    setShowInput((previousState)=>!previousState);
  };
  const handleChange = (e) => {
    setTaskValue(e.target.value);
  };
  return (
    <Container marginTop={"20px"}>
      <Flex>
        <Heading as="h2" size={"md"}>
          Task
        </Heading>
        <Spacer />
        <Button onClick={handleShowInput}>{showInput?'Cancel Add':'Add Task'}</Button>
      </Flex>
      {showInput && (
        <Flex marginTop={"10px"}>
          <Input
            type="text"
            placeholder="Enter task name"
            w={"80%"}
            value={taskValue}
            onChange={handleChange}
          />
          <Spacer />
          <Button
            onClick={() => {
              handleAddTask(taskValue), setShowInput(false), setTaskValue("");
            }}
          >
            <AddIcon />
          </Button>
        </Flex>
      )}
      <TaskList taskLists={taskLists}/>
    </Container>
  );
};

export default Task;
