import {Link, Outlet} from 'react-router-dom'
const Adminpage=()=>{
    return (
        <>
            <h1>Adminpage</h1>
             <button><Link to={'admin/purchase'}>Go to purchase department</Link></button>
             <button><Link to={'admin/selldepat'}>Go to sell department</Link></button>   
            <button><Link to={'/'}>Go to Home</Link></button>
            <Outlet/>
        </>
    )
}
export default Adminpage