import {useParams} from 'react-router-dom'
const EditEventPage=()=>{
    const {eventId}=useParams()
    return (
        <h1>EditEventPage {eventId}</h1>
    )
}
export default EditEventPage