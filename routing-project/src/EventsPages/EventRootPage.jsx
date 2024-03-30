import {Outlet,Link,} from 'react-router-dom'
const EventRootPage=()=>{

    return <>
       <button><Link to={'/events'}>All events</Link></button>
       <button><Link to={'new'}>New event</Link></button>
       {}
       <Outlet/> 
    </>
}
export default EventRootPage
