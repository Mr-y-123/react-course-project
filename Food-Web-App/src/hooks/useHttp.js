import { useEffect, useState } from "react";
async function sendHttpRequest(url, config) {
  const response = await fetch(url, config);
  const reData = await response.json();
  if (!response.ok) {
    throw new Error(
      response.message || "Somthing went wrong ,failed to send request."
    );
  }
  return reData;
}

const useHttp = (url,config) => {
   const [error,setError]=useState('')
   const [isLoading,setLoading]=useState(false)
   const [data,setData]=useState([]) 
  async function sendRequest(){
        setLoading(true)
        try{
            const reData=sendHttpRequest(url ,config)
            setLoading(false)
            setData(reData)
        }
        catch(error){
              setError(error.message||"somthing went wrong")
              setLoading(false)  
        }
   } 
   useEffect(()=>{
        if(config&&config.method==='GET'){
            sendRequest()
        }
   },[])

   return {data,error,isLoading,sendRequest}
};
export default useHttp;
