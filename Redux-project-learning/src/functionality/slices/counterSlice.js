import {createSlice} from '@reduxjs/toolkit'
const initialState={
    counter:0,
    showCounter:true
}
 const counterSlice=new createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:(state)=>{state.counter++},
        decrement:(state)=>{state.counter--},
        incremetByAmount:(state,action)=>{state.counter+=action.payload},
        toggle:(state)=>{state.showCounter=!state.showCounter}
    }
 
})


export const {increment,decrement,incremetByAmount,toggle}=counterSlice.actions
export default counterSlice.reducer
 