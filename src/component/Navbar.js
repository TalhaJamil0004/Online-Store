import React from 'react'
import "../style.css"
import { NavLink } from 'react-router-dom'

import { useSelector } from 'react-redux'

export default function Navbar(props) {
  let item= useSelector((state)=> state.cart)//here the state is the whole app state in which there 
  //are different states(slices) so from all states(slices) we take cart slice that we named in store
  // but in this scenario i have only one slice of cart make sure when we take a slice 
  //and put it in a variable then whenever the slice/state changes then theupdated version
  //(thats what we called to subscribe a state)
  //  is present in that variable so here no need of set state it has done in the back end.
  return (
    <div className='navbar' style={props.style}> 
      <img src={require("../images/file.png")} alt="ok" style={{width:"60px", paddingRight:"40px"} }></img>
        <ul>
            <NavLink to={"/"}  className={"navlink"}>Home</NavLink>
            <NavLink to={"/cart"} className={"navlink"}>Cart</NavLink>
            <h4 style={{color: "white", marginRight:"20px"}}>Cart Items {item.length}</h4>
        </ul>
    </div>
  )
}