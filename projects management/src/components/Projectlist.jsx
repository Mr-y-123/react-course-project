import { Heading, List, ListItem, Container } from "@chakra-ui/react";
import { memo, useContext } from "react";
import { ContextData } from "../store/DataContextProvider";
const ProjectsList = memo(function ProjectList(){
  const {projects,handleSelectProject}=useContext(ContextData)
  console.log("<ProjectList/> is Render");
  return (
    <Container marginTop={"30px"}>
      <Heading as={"h2"} size={"md"}>
        Projects List
      </Heading>
      <List spacing={"10px"} h={"500px"} overflowY={"auto"} padding={"10px"}>
        {projects.projects.map((project) => (
          <ListItem
            key={project.id}
            overflowWrap={"anywhere"}
            fontFamily={"sans-serif"}
            padding={"10px"}
            borderRadius={"3px"}
            _hover={{ backgroundColor: "grey" }}
            cursor={"pointer"}
            backgroundColor={project.id === projects.selectedProjectId && "grey"}
            onClick={() => handleSelectProject(project.id)}
          >
            {project.title}
          </ListItem>
        ))}
      </List>
    </Container>
  );
});

export default ProjectsList;
