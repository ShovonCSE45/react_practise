import React, { useState } from 'react'

import './Form_module.css'
import {useFormik} from "formik";
import * as yup from 'yup';

export default function SignUP_Using_yup() {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        validationSchema: yup.object({
            name: yup.string().min(2,"Name must have atleast 2 charecter").required(),
            email: yup.string().min(2).required(),
            password: yup.string().min(6,"Password must have atleast 6 charecter").required(),
        }),
        onSubmit: (values, {resetForm})=>{
            console.log(values);
            resetForm({values:""});
        }
    })  
    console.error(formik.errors);   
  
  return (
    <div>
        <h1>Hello everyone</h1>
        <form action="" onSubmit={formik.handleSubmit}>
            <div className='form_modules_yup'>
                <label htmlFor="name">Name :</label>
                <input type="text" name='name' id='name' value={formik.values.name} onChange={formik.handleChange} />
                <br />
                {formik.touched.name && formik.errors.name && <span style={{color:'red'}}>{formik.errors.name}</span>}
            </div>
            <div className='form_modules_yup'>
                <label htmlFor="email">Email :</label>
                <input type="email" name='email' id='email' value={formik.values.email} onChange={formik.handleChange} />
                <br />
                {formik.touched.email && formik.errors.email && <span style={{color:'red'}}>{formik.errors.email}</span>}
            </div>
            <div className='form_modules_yup'>
                <label htmlFor="password">Password :</label>
                <input type="password" name='password' id='password' value={formik.values.password} onChange={formik.handleChange} />
                <br />
                {formik.touched.password && formik.errors.password && <span style={{color:'red'}}>{formik.errors.password}</span>}
            </div>
            <div className='form_modules_yup'>
                <button type='submit'>Submit</button>
            </div>
        </form>
    </div>
  )
}
