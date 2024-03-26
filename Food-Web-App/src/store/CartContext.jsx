import { createContext, useReducer } from "react";
export const CartContext = createContext({
  items: [],
  handleAddItem: (item) => {},
  handleRemoveItem: (id) => {},
  clearCart: () => {},
});
function CartReducer(state, action) {
  const updateItems = [...state.items];
  if (action.type === "ADD_ITEM") {
    const existItemIndex = state.items.findIndex(
      (item) => item.id === action.payload.id
    );
    if (existItemIndex > -1) {
      const updateItem = {
        ...state.items[existItemIndex],
        quantity: state.items[existItemIndex].quantity + 1,
      };
      updateItems[existItemIndex] = updateItem;
    } else {
      updateItems.push({ ...action.payload, quantity: 1 });
    }
    return { ...state, items: updateItems };
  } else if (action.type === "REMOVE_ITEM") {
    const existItemIndex = state.items.findIndex(
      (item) => item.id === action.Id
    );
    const existItem = state.items[existItemIndex];
    if (existItem.quantity === 1) {
      updateItems.splice(existItemIndex, 1);
    } else {
      const updateItem = { ...existItem, quantity: existItem.quantity - 1 };
      updateItems[existItemIndex] = updateItem;
    }
    return { ...state, items: updateItems };
  } else if (action.type === "clearCart") {
      return {...state,items:[]}
  }
  return state;
}
const ContextProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(CartReducer, { items: [] });

  const handleAddItem = (item) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };
  const handleRemoveItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", Id: id });
  };
  const handleClearCart=()=>{
    dispatch({type:'clearCart'})
  }
  const cartContextValue = {
    items: cart.items,
    handleAddItem,
    handleRemoveItem,
    handleClearCart
  };
  console.log(cartContextValue);
  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};
export default ContextProvider;
