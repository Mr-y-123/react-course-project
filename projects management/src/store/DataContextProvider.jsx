import { createContext, useState } from "react";
import { useEffect } from "react";
export const ContextData = createContext({
  projects: [],
  handleSelectProject: () => {},
  handleDeleteProject: () => {},
  handleAddProject: () => {},
  handleNewProject: () => {},
  handleCancel: () => {},
  handleAddTask: () => {},
  handleDeleteTask: () => {},
  handleEditTask: () => {},
});

const DataContextProvider = ({ children }) => {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });
  useEffect(() => {
    const projectsData = localStorage.getItem("projects");
    if (!projectsData) {
      localStorage.setItem(
        "projects",
        JSON.stringify({
          selectedProjectId: undefined,
          projects: [],
          tasks: [],
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
        tasks: projectState.tasks.filter((task) => task.projectId !== id),
      })
    );
    setProjectState(JSON.parse(localStorage.getItem("projects")));
  };
  const handleAddTask = (text) => {
    localStorage.setItem(
      "projects",
      JSON.stringify({
        ...projectState,
        tasks: [
          ...projectState.tasks,
          {
            projectId: projectState.selectedProjectId,
            task: text,
            taskId: Math.random(),
          },
        ],
      })
    );
    setProjectState(JSON.parse(localStorage.getItem("projects")));
  };
  const handleDeleteTask = (taskId) => {
    localStorage.setItem(
      "projects",
      JSON.stringify({
        ...projectState,
        tasks: projectState.tasks.filter((task) => task.taskId !== taskId),
      })
    );
    setProjectState(JSON.parse(localStorage.getItem("projects")));
  };

  const handleEditTask = (editData) => {
    const editableArray = [...projectState.tasks];
    const editIndex = editableArray.findIndex(
      (task) => task.taskId === editData.editId
    );
    const { projectId } = editableArray[editIndex];
    editableArray.splice(editIndex, 1, {
      taskId: editData.editId,
      task: editData.editValue,
      projectId,
    });
    localStorage.setItem(
      "projects",
      JSON.stringify({
        ...projectState,
        tasks: editableArray,
      })
    );
    setProjectState(JSON.parse(localStorage.getItem("projects")));
  };
  const CtxValue = {
    projects: projectState,
    handleSelectProject,
    handleDeleteProject,
    handleAddProject,
    handleNewProject,
    handleCancel,
    handleAddTask,
    handleDeleteTask,
    handleEditTask,
  };
  return (
    <ContextData.Provider value={CtxValue}>{children}</ContextData.Provider>
  );
};

export default DataContextProvider;
