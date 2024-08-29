import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { remove } from '../store/slice'
export default function Cart() {

const cartState = useSelector((wholeState)=>{ return wholeState.cart})

const dispatch = useDispatch()
function handleRemove(valueId){
  dispatch(remove(valueId))
 }
 console.log(cartState)
if(cartState.length==0){
return <h1 className='mid'>Your cart is empty</h1>
}
  return (
    <div className='mid'>
      <h1>Cart</h1>
      <h3>Cart items are shown below!</h3>
      <span className='productWrapper'>
      {
        cartState.map((value)=>(
          <div className='product'>
            <img src={value.image}  style={{width:"120px"}} alt='item'></img>
            <h5>{value.title}</h5>
            <h4>{value.price}</h4>
            <button onClick={()=>handleRemove(value.id)} className='btn'>Remove item</button>
            {/*here we pass value.id so in above handleRemove we use this value.id and pass it to remove
             action that we make in reducer, present in slice.js file as we already define logic 
             for removing items by their ids so from above dispatch in handleRemove we pass that action.payload */} 
          </div>
        ))
      }
      </span>
    </div>
  )
}
