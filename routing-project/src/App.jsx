
import './App.css';
import {RouterProvider} from 'react-router-dom' 
import {router }from './routes/router.jsx'
import { eventRouter } from './routes/eventRouter.jsx';
function App() {
  return (
    <RouterProvider router={eventRouter}/>
  )
}

export default App
