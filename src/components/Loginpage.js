import React, {useContext, useEffect, useState} from 'react';
import Navbarhome from './Navbarhome';
import { Link } from 'react-router-dom';
import { getContacts } from '../config/Myservices';
import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { userDetail } from '../App';

export default function Loginpage() {
    const {userName,onChangeUser} = useContext(userDetail);
    const [userInfo,setuserInfo] = useState();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: {errors},
      } = useForm();
    
    const onSubmit = (data)=> {
        
        let arr = [];
        getContacts()
        .then(res => {
            arr.push(...res.data);
            if(arr.some(info=>
                info.email === data.email && info.password === data.password
              ))
              {
                let filteredArray = arr.filter(checkAdult)

                function checkAdult(age) {
                    return age.email === data.email && age.password === data.password
                }
                onChangeUser(filteredArray[0].username)
                navigate("/login/home/menu")
              }
            else{
                alert("Enter valid details")
            }
        }) 
    }


    
  return (
    <>
        <Navbarhome/>
        <div className='container mt-3'>
            <h3 className='fw-bold'>Login</h3>
            <form onSubmit={handleSubmit(onSubmit)} className='mt-3'>
                <div className='mb-3'>
                    <input type="text" 
                    className='form-control' 
                    placeholder='email'
                    {...register('email',{required: "Incorrect mail id"})}
                    />
                    <p className='text-danger'>{errors.email?.message}</p>
                </div>
                <div className='mb-3'>
                    <input type="password" 
                    className='form-control' 
                    placeholder='password'
                    {...register('password',{required: "Incorrect paasword"})}
                    />
                    <p className='text-danger'>{errors.password?.message}</p>
                </div>
                <input type="submit" value="Login" className='btn btn-secondary' />
          
                
            </form>
        </div>
    </>
  )
}
