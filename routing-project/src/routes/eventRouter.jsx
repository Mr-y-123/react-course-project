import { createBrowserRouter } from "react-router-dom";
import HomePage from "../EventsPages/HomePage";
import EventPage from "../EventsPages/EventPage";
import EventDetailPage from "../EventsPages/EventDetailPage";
import NewEventPage from "../EventsPages/NewEventPage";
import EditEventPage from "../EventsPages/EditEventPage";
import Errorpage from "../pages/Errorpage";
import RootLayout from "../pages/RootLayout";
import EventRootPage from "../EventsPages/EventRootPage";
import { loader } from "../EventsPages/EventPage";
export const eventRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        errorElement: <Errorpage />,
      },
      {
        path: "/events",
        element: <EventRootPage/>,
        errorElement: <Errorpage />,
        children:[
          {
            index:true,
            element:<EventPage/>,
            loader:loader
          },
          {
            path: ":eventId",
            errorElement: <Errorpage />,
            children:[
              {
                index:true,
                element:<EventDetailPage/>
              },
              {
                path: "edit",
                element: <EditEventPage />,
                errorElement: <Errorpage />,
              },
            ]
          },
          {
            path: "new",
            element: <NewEventPage />,
            errorElement: <Errorpage />,
          },
          
        ]
      },
      
    ],
  },
]);
