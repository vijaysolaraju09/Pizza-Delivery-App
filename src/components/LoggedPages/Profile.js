import React from 'react'

import { useContext } from 'react';
import { userDetail } from '../../App';
// import { getContacts } from '../config/Myservices';

export default function Profile() {
    // const { userName, onChangeUser } = useContext(userDetail);
    // getContacts()
    // .then(res => {
    //     arr.push(...res.data);
    //     if(arr.some(info=>
    //         info.email === data.email && info.password === data.password
    //       ))
    //       {
            
    //       }
        
    // }) 
    return (
        <>
            <div className='container'>
                <div className='card d-flex flex-row ' style={{ width: "20rem" }}>
                    <img src='/images/profile.png' className="card-img-top" alt='profile' />
                    <div className='card-body d-flex flex-column justify-contenr-around'>
                        <h2>Username:</h2>
                        <h3>{"userName"}</h3>
                        <h2>Email:</h2>
                    </div>
                </div>
            </div>
        </>
    )
}
