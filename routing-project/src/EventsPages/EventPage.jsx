import {Link,Outlet,useLoaderData} from 'react-router-dom'
const EventPage=()=>{
    const data=useLoaderData()
    // console.log(data);
    return (
       <>
        
        <ul>
            <li>
                <Link to={'1'}>Event 1</Link>
                <button><Link to={'1/edit'}>edit</Link></button>
            </li>
            <li>
                <Link to={'2'}>Event 2</Link>
                <button><Link to={'2/edit'}>edit</Link></button>
            </li>
        </ul>
        <Outlet/>
       </>
    )
}


export function loader(){
    return "run and load"
}
export default EventPage