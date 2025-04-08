import React from 'react';
import "./Style1.css";

const Adideal = () => {
  return (
    <div>
        <h1> Available offer </h1>
        <h2>Special Offer :Get 20% off on your first order!</h2>
        <div className="image-container">
        <div className="image-item">
      <img src="dosa.jpg" alt="pzz" style={{ marginRight:"45px"}}/>
      <p>DOSA</p>
      </div>
      
      <div className="image-item">
      <img src="idli.jpg" alt="pzz" style={{ marginRight:"45px"}}/>
      <p>IDLI</p>
      </div>
      <div className="image-item">
      <img src="pizza.jpg" alt="pzz" />
      <p>CHEESE PIZZA</p>
    </div>
    <div className="image-item">
    <img src="burg.jpg" alt="pzz"/>
    <p>BURGER</p>
    </div>
    <div className="image-item">
    <img src="cake.jpg" alt="pzz" />
    <p>CHOCOLATE CAKE</p>
    </div>
    <div className="image-item">
    <img src="cc.jpg" alt="cup"/>
    <p>CUP CAKE</p>
    </div>
    <div className="image-item">
    <img src="oreo.jpg" alt="cup"/>
    <p>OREO TOFFEE</p>

    </div>
    <div className="image-item">
    <img src="ww.jpg" alt="cup"/>
    <p> SANDWIZZ</p>
    
    </div>
    
    </div>
    <div>
    <h2 text-align="Center">For more information please login </h2>
    </div>
    </div>
  )
}

export default Adideal
