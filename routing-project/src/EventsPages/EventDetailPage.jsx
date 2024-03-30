import {Link, useParams,Outlet} from 'react-router-dom'
const EventDetailPage=()=>{
    const {eventId}=useParams()

    return (
        <>
            <h1>EventDetailPage {eventId}</h1>
            <button><Link to={'edit'}>edit {eventId}</Link></button>
            <Outlet/>
        </>

    )
}
export default EventDetailPage