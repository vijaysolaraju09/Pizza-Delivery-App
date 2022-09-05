import React from 'react';
import { Link } from 'react-router-dom';

export default function Success() {
  return (
    <div className='container'>
        <h1>Order has been placed successfully</h1>
        <div className='bg-success rounded p-3'>
            <h3 className='text-light'>You will receive notification by email with order details</h3>
        </div>
        <div className='mt-3'>
        <Link className="btn btn-dark" to="/login/home/menu">Go and order some more</Link>
        </div>
        
    </div>
  )
}
