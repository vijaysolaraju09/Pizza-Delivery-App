import React from 'react';
import Navbarhome from './Navbarhome';
import { addContact } from '../config/Myservices';
import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';


export default function Signup() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = (data)=>{
    
    addContact(data)
    .then(res => {
      if(res){
        alert("Registered Successfully");
        navigate("/login");
      }
    })
  }
  return (
    <>
      <Navbarhome />
      <div className='container mt-3'>
        <h3 className='fw-bold'>Sign Up</h3>
        <form onSubmit={handleSubmit(onSubmit)} className='mt-3'>
          <div className='form-floating mb-3'>
            <input type="text" 
            className='form-control' 
            placeholder='name' 
            id="userInput1" 
            {...register('username',{required: "PLEASE ENTER USERNAME"})}
            />
            <label htmlFor='userInput1'>Name</label>
            <p className='text-danger'>{errors.username?.message}</p>
          </div>
          <div className='form-floating mb-3'>
            <input type="email" 
            className='form-control' 
            placeholder='email' 
            id="userInput2"
            {...register('email',{required:"Email is required", pattern: {value: `/^\S+@\S/+$/i`, message: 'ENTER VALID MAIL ID'}})}
            />
            <label htmlFor='userInput2'>Email</label>
            <p className='text-danger'>{errors.email?.message}</p>
          </div>
          <div className="form-floating mb-3">
            <input type="password"
            className='form-control'
            placeholder="password"
            id="userInput4" 
            {...register('password',{required: "Enter password",
            minLength:{value:4, message:'minimum lenth should be 10 characters'},
            maxLength:{value:10, message: 'maximum lenth should be 10 characters' }
            })} />
            <label htmlFor='userInput4'>Password.</label>
            <p className='text-danger'>{errors.password?.message}</p>
          </div>

          <input type="submit" value="SignUp" className='btn btn-secondary' />
          
        </form>
      </div>
    </>
  )
}
