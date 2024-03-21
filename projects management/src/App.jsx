import "./App.css";
import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";
import ProjectsList from "./components/Projectlist";
import { useContext } from "react";
import { ContextData } from "./store/DataContextProvider";
function App() {
  const {projects}=useContext(ContextData)
  console.log("<App/> is Render");
  const selectedProject = projects.projects.find(
    (project) => project.id === projects.selectedProjectId
  );

  let content 
  if(selectedProject){
    content=<SelectedProject selectedProject={selectedProject}/>
  }    
  if (projects.selectedProjectId === null) {
    content = (
      <NewProject
      />
    );
  } else if (projects.selectedProjectId === undefined) {
    content = <NoProjectSelected/>;
  }
  return (
    <Grid
      h="100vh"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
    >
      <Sidebar>
        <ProjectsList
        />
      </Sidebar>
      <GridItem colSpan={4} rowSpan={2} padding={"25px"} marginTop={"25px"}>
        {content}
      </GridItem>
    </Grid>
  );
}

export default App;
