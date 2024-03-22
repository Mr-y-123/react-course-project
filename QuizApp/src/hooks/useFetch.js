import { useEffect, useState } from "react";
function useFetch() {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/places");
        if (!response.ok) {
          console.error("Fail to fatch");
        }
        const data = await response.json();
        setPlaces(data);
      } catch (error) {
        setPlaces(error);
      }
    }
    fetchData();
  }, []);
  return places;
}
export default useFetch;
