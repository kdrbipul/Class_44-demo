import React from 'react';
import Congrat from '../Congrat/Congrat';
import './Cart.css'
const Cart = ({cart}) => {
    return (
        <div className='container cart_container'>
            <h1 className={cart.length === 2 ? `orange` : 'purple'}>Cart {cart.length}</h1>
            {
                cart.length === 3 ? <Congrat></Congrat> : undefined
            }
        </div>
        
    );
};

export default Cart;