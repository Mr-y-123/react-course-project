import { useEffect,useState } from "react";
function useFetch(){
    const [projectState, setProjectState] = useState(JSON.parse(localStorage.getItem('projects')));
    const localStorageData=localStorage.getItem('projectes')
      useEffect(() => {
        if (!localStorageData&&!projectState){
          localStorage.setItem(
            "projects",
            JSON.stringify({
              selectedProjectId: undefined,
              projects: [],
              tasks: [],
            })
          );
          setProjectState(JSON.parse(localStorage.getItem('projects')));
        }
        else{
            setProjectState(JSON.parse(localStorage.getItem('projects')));
        }
        
      }, []);
      return {projectState,setProjectState}
}
export  default useFetch