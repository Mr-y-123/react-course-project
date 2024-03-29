import "./App.css";
// import CounterApp from './components/CounterApp'
import Header from "./components/Header";
import LayOut from "./components/Layout";
import CartItem from "./components/CartItem";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Shop from "./components/Shop";
import Notification from "./components/Notification";
import { sentCartData ,fetchCartData} from "./functionality/slices/add-cartSlice";
const DUMMY_PRODUCTS = [
  {
    itemId: "p1",
    price: 6,
    title: "xxxxx",
    description: "dffg fgfgf gfgf ti g",
  },
  {
    itemId: "p2",
    price: 52,
    title: "xyz",
    description: "dfdfdfdv fdfdf dfdfd",
  },
];

function App() {
  const cartIsVisible = useSelector((state) => state.ui.cartisVisible);
  const cartData = useSelector((state) => state.addCart);
  const notificationStatus=useSelector((state)=>state.ui.notification)
  const dispatch = useDispatch();
  useEffect(()=>{
      dispatch(fetchCartData())
  },[dispatch,])
  useEffect(() => {
    if(cartData.changed){
      dispatch(sentCartData(cartData))
    }
  }, [cartData, dispatch]);
  return (
    <>
      {notificationStatus&&<Notification notificationStatus={notificationStatus}/>}
      <Header />
      <LayOut>
        {cartIsVisible && <CartItem />}
        <Shop shopData={DUMMY_PRODUCTS} />
      </LayOut>
    </>
  );
}

export default App;
