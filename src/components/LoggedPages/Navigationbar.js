import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import Home from '../Home';
import Menu from './Menu';
import { cartCount } from '../../App';
import { getProductById } from '../../config/Myservices';
import { userDetail } from '../../App';

export const orderValue = React.createContext();

export default function Navigationbar() {
    const { userName, onChangeUser } = useContext(userDetail);
    const { count, onAdd } = useContext(cartCount);

    const [order, setOrder] = useState(0);

    const onValueChange = (value) => {
        setOrder(value);
    }

    return (
        <>
            <orderValue.Provider value={{ order, onValueChange }}>
                <div className='container bg-light d-flex justify-content-between align-items-center p-3 fixed-top'>
                    <div>
                        <Link to="/">
                            <img src="/images/pizza.jpg" alt="logo" width="100" />
                        </Link>

                    </div>
                    <div className='d-flex align-items-center'>
                        <Link className='text-secondary me-4' to="menu" style={{ fontSize: "20px", textDecoration: "none" }}>
                            Menu
                        </Link>
                        <Link className='text-secondary me-4' to="cart" style={{ fontSize: "20px", textDecoration: "none" }}>
                            Cart <span className='bg-secondary text-light rounded ps-2 pe-2' style={{ fontSize: '18px' }}>{count.length}</span>
                        </Link>
                        <Link className='text-secondary me-4' to="profile" style={{ fontSize: "20px", textDecoration: "none" }}>Profile</Link>
                        <Link className='btn btn-outline-secondary me-2' to="/login" style={{ textDecoration: "none" }}>Logout</Link>
                    </div>
                </div>


                <div style={{ marginTop: "140px" }}>
                    
                </div>
                
                <div>
                    <Outlet />
                </div>
            </orderValue.Provider>

        </>
    )
}
