import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice"
import productReducer from "./productSlice";
 const store= configureStore({
    reducer:{
        cart:cartReducer ,// so here we can add multiple reducers by given them related names make sure property 
        //is the name we gave but value is the reducer we import above
        product :productReducer
    }
 })

 export default store