import Purchase from '../pages/adminpages/Purchase'
import Selldepa from '../pages/adminpages/Selldepa'
import Errorpage from '../pages/Errorpage'
export const  adminRoute=[
    {
        path:'admin/purchase',
        element:<Purchase/>,
        errorElement:<Errorpage/>
      },
      {
        path:'admin/selldepat',
        element:<Selldepa/>,
        errorElement:<Errorpage/>
      }
]