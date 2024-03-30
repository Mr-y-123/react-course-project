import { Link,useNavigate } from "react-router-dom"

const Home=()=>{
    const navigate=useNavigate()
    const handleNavigate=()=>{
        navigate('products')    
    }
    return (
        <>
        <h1>Hello Home</h1>
        <Link to={'products'}>Go to Products</Link>
        <button onClick={handleNavigate}>Navigate</button>
        </>
    ) 
}
export default Home