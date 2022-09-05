import React from 'react';
import { Link } from 'react-router-dom';

export default function Welcome() {
  return (
    <>
    <div className='container mt-3 bg-light p-3'>
        <h1 style={{fontSize: "62px"}}>Pizza Delivery</h1>
        <h3 style={{fontWeight: "400"}}>Welcome to pizza delivery service. This is the place where you may choose 
            the most delicious pizza you like from wide variety of options!
        </h3>
        <hr />
        <p className='fw-bold'>We're performing delivery free of charge in case if your order is higher than 20$</p>
        <div className='d-flex'>
            <Link className='btn btn-secondary bg-dark fw-bold w-100' to="/login">Sign In and Order</Link>
        </div>
    </div>
    
    
    </>
  )
}
