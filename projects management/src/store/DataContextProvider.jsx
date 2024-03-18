import  {createContext,useState} from 'react'
import { useEffect } from 'react';
export const ContextData=createContext({
    projects:[],
    handleSelectProject:()=>{},
    handleDeleteProject:()=>{},
    handleAddProject:()=>{},
    handleNewProject:()=>{},
    handleCancel:()=>{}
})

const DataContextProvider = ({children}) => {
    const [projectState, setProjectState] = useState({
        selectedProjectId: undefined,
        projects: [],
      });
      useEffect(() => {
        const projectsData = localStorage.getItem("projects");
        if (!projectsData) {
          localStorage.setItem(
            "projects",
            JSON.stringify({
              selectedProjectId: undefined,
              projects: [],
            })
          );
        } else {
          setProjectState(JSON.parse(projectsData));
        }
      }, []);
      const handleSelectProject = (id) => {
        localStorage.setItem(
          "projects",
          JSON.stringify({ ...projectState, selectedProjectId: id })
        );
        setProjectState(JSON.parse(localStorage.getItem("projects")));
      };
      const handleCancel = () => {
        localStorage.setItem(
          "projects",
          JSON.stringify({ ...projectState, selectedProjectId: undefined })
        );
        setProjectState(JSON.parse(localStorage.getItem("projects")));
      };
      const handleNewProject = () => {
        localStorage.setItem(
          "projects",
          JSON.stringify({ ...projectState, selectedProjectId: null })
        );
        setProjectState(JSON.parse(localStorage.getItem("projects")));
      };
    
      const handleAddProject = (data) => {
        let d = new Date();
        let time = `${d.getHours() - 12}:${d.getMinutes()}:${d.getSeconds()}`;
        localStorage.setItem(
          "projects",
          JSON.stringify({
            ...projectState,
            projects: [
              { ...data, time, id: Math.random() },
              ...projectState.projects,
            ],
          })
        );
        setProjectState(JSON.parse(localStorage.getItem("projects")));
      };
      const handleDeleteProject = (id) => {
        localStorage.setItem(
          "projects",
          JSON.stringify({
            selectedProjectId: undefined,
            projects: projectState.projects.filter((project) => project.id !== id),
          })
        );
        setProjectState(JSON.parse(localStorage.getItem("projects")));
      };

  const CtxValue={
    projects:projectState,
    handleSelectProject,
    handleDeleteProject,
    handleAddProject,
    handleNewProject,
    handleCancel
  }  
  return (
    <ContextData.Provider value={CtxValue}>
        {children}
    </ContextData.Provider>
  )
}

export default DataContextProvider