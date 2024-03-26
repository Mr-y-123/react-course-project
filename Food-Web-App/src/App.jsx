import Header from "./components/Header";
import "./App.css";
import Meals from "./components/Meals";
import Model from "./components/Model";
import { useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
async function fetchData() {
  const response = await fetch("/api/meals");
  const reData=await response.json()
  if(!response.ok){
    throw new Error("Somthing went wrong ,failed to send request.")
  }
  return reData;
}
function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [mealsData, setMealsData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetchData().then((data) => {
      setMealsData(data);
      setLoading(false);
    });
  }, []);

  const handleSearch = (e) => {
    if (e.target.value !== "") {
      const searchData = mealsData.filter((item) => {
        let searchValue = item.name.toLowerCase();
        return searchValue.includes(e.target.value.toLowerCase());
      });
      setMealsData(searchData);
    }
    else{
      fetchData().then((data) => {
        setMealsData(data);
      });
    }
  };

  return (
    <div className="conatainer">
      <Model onClose={onClose} isOpen={isOpen} />
      <Header onOpen={onOpen} onSearch={handleSearch} />
      <Meals mealsData={mealsData} isLoading={isLoading} />
    </div>
  );
}

export default App;
