import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../functionality/slices/counterSlice'
import authReducer from '../functionality/slices/authSlice'
import cartReducer from '../functionality/slices/cartSlice'
import addToCartReducer from '../functionality/slices/add-cartSlice'


const store=configureStore({
    reducer:{
        counter:counterReducer,
        auth:authReducer,
        ui:cartReducer,
        addCart:addToCartReducer
    },
   
})

export default store   

