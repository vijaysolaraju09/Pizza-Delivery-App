import React from 'react';
import { useContext } from 'react';
import { orderValue } from './Navigationbar';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { cartCount } from '../../App';

export default function Checkout() {
    const {count, onAdd} = useContext(cartCount);
    const navigate = useNavigate();
    const { order, onValueChange } = useContext(orderValue);
    const clearCart = () => {
        localStorage.clear();
        navigate("/login/home/success")
        onAdd([]);
    }
  return (
    <div className='container'>
        <h1>Checkout</h1>
        <form>
            <p>Credit Card</p>
            <div className='mb-3'>
                    <input type="text" 
                    className='form-control' 
                    />
            </div>
        </form>
        <h2>Order Total: ₹{order}</h2>
        <button className='btn btn-secondary' onClick={clearCart}>Check Out</button>
    </div>
  )
}
