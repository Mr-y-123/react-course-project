import { createSlice} from "@reduxjs/toolkit";
import { setNotification } from "./cartSlice";
const initialCartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
  changed:false
};
const addtoCartSlice = new createSlice({
  name: "addCart",
  initialState: initialCartState,
  reducers: {
    replaceCart:(state,action)=>{
      state.totalAmount=action.payload.totalAmount
      state.totalQuantity=action.payload.totalQuantity
      state.items=action.payload.items||[]
      // state.changed=action.payload.changed
    },
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existCartItem = state.items.find(
        (item) => item.itemId === newItem.itemId
      );
      state.totalQuantity++;
      if (!existCartItem) {
        state.items.push({
          itemId: newItem.itemId,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existCartItem.quantity++;
        existCartItem.totalPrice += newItem.price;
      }
      state.totalAmount += newItem.price;
      state.changed=true
    },
    removeToCart: (state, action) => {
      const id = action.payload;
      const existCartItem = state.items.find((item) => item.itemId === id);
      state.totalQuantity--;
      if (existCartItem.quantity === 1) {
        state.items = state.items.filter((item) => item.itemId !== id);
      } else {
        existCartItem.quantity--;
        existCartItem.totalPrice -= existCartItem.price;
      }
      state.totalAmount -= existCartItem.price;
      state.changed=true
    },
  },
});

export const fetchCartData=()=>{
  return async dispatch=>{
    const fetchData=async()=>{
        const response=await fetch("https://redux-demo-applicaion-default-rtdb.firebaseio.com/cart.json")
        if(!response.ok){
          dispatch(
            setNotification({
              status: "Error",
              message: "data not sent to data-base!",
            })
          );
        }
        const data=await response.json()
        return data
    }
    try{
      const cartData=await fetchData()
      dispatch(addtoCartSlice.actions.replaceCart(cartData))
    }
    catch(error){
      dispatch(
        setNotification({
          status: "Error",
          message: "Somthing went wrong!",
        })
      );
    }
  }
}

export const sentCartData = (cartData) => {
  return (dispatch) => {
    dispatch(setNotification({ status: "panding", message: "data is fetch" }));
    const setDataToDb = async () => {
      const response = await fetch(
        "https://redux-demo-applicaion-default-rtdb.firebaseio.com/cart.json",
        { method: "PUT", body: JSON.stringify(cartData) }
      );
      if (!response.ok) {
        dispatch(
          setNotification({
            status: "Error",
            message: "data not sent to data-base!",
          })
        );
      }
      dispatch(
        setNotification({
          status: "success",
          message: "data is sent to successfull!",
        })
      );
    };
    setDataToDb().catch(() =>
      dispatch(
        setNotification({
          status: "Error",
          message: "data not sent to data-base!",
        })
      )
    );
  };
};

export const { addToCart, removeToCart } = addtoCartSlice.actions;
export default addtoCartSlice.reducer;
