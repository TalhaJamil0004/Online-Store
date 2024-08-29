
import { createSlice } from "@reduxjs/toolkit"

export const Statuses =Object.freeze({//from this Object.freeze we make object like enum means 
    //we dont change the object properties 
    IDLE: "SUCCESS",
    ERROR: "ERROR",
    LOADING: "LOADING"
})


const initialState={
    data:[],
    status:Statuses.IDLE,
}
const productSlice= createSlice({
    name:"product",
    initialState,
    reducers: {
        setProducts(state,action){
           state.data = action.payload
        },
        setStatus(state,action){
            state.status = action.payload
         }
       
    }

})
export default productSlice.reducer
export const {setProducts, setStatus} = productSlice.actions//here actually we not only export it 
//but also destructure it so even we use it in thunk 

//thunks middleware :  (used to handle delayed work)thunk is basically a function that returns
//another function that should be async in which as parameters we have dispath and getState 

export function fetchProducts(){
    return async function(dispatch, getState){
        //getState is used to get the current state
        dispatch(setStatus( Statuses.LOADING ))
   try{
    let data= await fetch('https://fakestoreapi.com/products')
    let realData= await data.json()
    dispatch(setProducts(realData))
    dispatch(setStatus( Statuses.IDLE))  

   }catch(err)
   {
    console.log(err);
    dispatch(setStatus( Statuses.ERROR))  

   }
    }
}
