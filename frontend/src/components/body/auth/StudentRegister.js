import React, { useState } from 'react';

import GoogleIcon from '@mui/icons-material/Google';
import { Link } from "react-router-dom";

import "./Register.css";
const StudentRegister = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        dob: "",
    });

    const handleFormData = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        console.log(formData);
    }
    return (
        <div className='studentRegister'>
            <form className='register_form'>
                <input placeholder='Name' type="text" required name="name" value={formData.name} onChange={handleFormData} />
                <input placeholder='Email' type="text" required name="email" value={formData.email} onChange={handleFormData} />
                <label for="dob">Date of birth</label>
                <input type="date" id="dob" name="dob" value={formData.dob} required onChange={handleFormData}
                    style={{ marginTop: "0" }}
                />
                <input placeholder='Password' type="password" required name="password" value={formData.password} onChange={handleFormData} />
                <div className='remebermeAndForgetPassword'>
                    <span className='rememberMe'>Remember me <input type="checkbox" /></span>
                    <span className='forgetPassword'>Forget Password?</span>
                </div>
                <button className='registerButton'>Register as a Student</button>
                <div className='register_form_divider'>
                    <hr />
                    <span>or</span>
                    <hr />
                </div>
                <div className='register_form_googleSignInButton'>
                    <GoogleIcon style={{ color: "red" }} />
                    <span>Sign Up with Google</span>
                </div>

                <div className='register_form_bottm'>
                    <span>Already registered? <Link to="/login">Login here</Link></span>
                </div>
            </form>

        </div>
    )
}

export default StudentRegister