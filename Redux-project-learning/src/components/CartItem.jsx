import Cart from "./Cart"
import { useSelector} from "react-redux"

const CartItem=()=>{
    const items=useSelector((state)=>state.addCart.items)

    return (
            <>
                {
                    items.map((item)=><Cart key={item.itemId} cartData={item}/>)
                }
            </>
    )
}
export default CartItem