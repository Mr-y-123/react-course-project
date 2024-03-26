import { createContext, useState } from "react";

export const  UserProgresContext=createContext({
    handleShowCart:()=>{},
    handleHideCart:()=>{},
    handleShowCheckoutCart:()=>{},
    handleHideChackOutCart:()=>{}
})

const UseContextProvider=({children})=>{
    const [Progress,setProgress]=useState('cart')
    const  handleShowCart=()=>(
        setProgress('cart')
    )
    const handleHideCart=()=>{
        setProgress('')
    }
    const handleShowCheckoutCart=()=>{
        setProgress('checkOut')
    }
    const handleHideChackOutCart=()=>{
        setProgress('')
    }
    const ctxValue={
        ProgressStatus:Progress,
        handleHideCart,
        handleHideChackOutCart,
        handleShowCart,
        handleShowCheckoutCart
    }

    return <UserProgresContext.Provider value={ctxValue}>
        {children}
    </UserProgresContext.Provider>
}
export default UseContextProvider