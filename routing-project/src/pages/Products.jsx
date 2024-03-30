import { Link } from "react-router-dom"
const Products=()=>{
    return (
        <>
            <h1>Hello Products</h1>
            <ul>
                <li><Link to={'1'}>Product 1</Link></li>
                <li><Link to={'/products/2'}>Product 2</Link></li>
                <li><Link to={'/products/3'}>Product 3</Link></li>
                <li><Link to={'/products/4'}>Product 4</Link></li>
                <li><Link to={'/products/5'}>Product 5</Link></li>
            </ul>
        </>
    )
}
export default Products