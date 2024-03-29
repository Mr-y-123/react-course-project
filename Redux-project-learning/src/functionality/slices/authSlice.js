import {createSlice} from '@reduxjs/toolkit'
const initialAuthState={
    isAuthetiCate:false
}
const authSlice=new createSlice({
    name:'auth',
    initialState:initialAuthState,
    reducers:{
        login:(state)=>{state.isAuthetiCate=true},
        logout:(state)=>{state.isAuthetiCate=false}
    }
})

export const {login,logout}=authSlice.actions
export default authSlice.reducer