import React, { useState } from 'react'

import './Form_module.css'
import {useFormik} from "formik";

export default function SignUP_forming() {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        onSubmit: (values)=>{
            console.log(values);
        }

    })      
  
  return (
    <div>
        <h1>Hello everyone</h1>
        <form action="" onSubmit={formik.handleSubmit}>
            <div className='form_modules'>
                <label htmlFor="name">Name :</label>
                <input type="text" name='name' id='name' value={formik.values.name} onChange={formik.handleChange} />
            </div>
            <div className='form_modules'>
                <label htmlFor="email">Email :</label>
                <input type="email" name='email' id='email' value={formik.values.email} onChange={formik.handleChange} />
            </div>
            <div className='form_modules'>
                <label htmlFor="password">Password :</label>
                <input type="password" name='password' id='password' value={formik.values.password} onChange={formik.handleChange} />
            </div>
            <div className='form_modules'>
                <button type='submit'>Submit</button>
            </div>
        </form>
    </div>
  )
}
