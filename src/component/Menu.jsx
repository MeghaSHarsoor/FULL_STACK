import React from 'react';
import {useState} from "react";

const Menu = () => {
  const [message,setMessage]=useState("");
  const handleOrderClick=(event) =>{event.preventDefault();
     
    alert("Thank you for your order");
    setMessage("Your order has been placed");
  };
  
  
  return (
    <div>
         <h1 align="center">Order Plz</h1>
         <img src="me4.jpg" alt="food"  style={{display:"block",margin:"0 auto"}}/>
         <br></br>
         <div class="mb-3">
    <label for="exampleInputname" class="form-label" ><b>Enter your Order</b></label>
    <input type="name" class="form-control" id="exampleInputname"/>
         <div>
         <button type="register" class="btn btn-primary" onClick={handleOrderClick}>PLACE ORDER</button>
         <br></br>
         {message &&<h2>{message}</h2>}
         </div>
         </div>
    </div>
    
  )
}

export default Menu
