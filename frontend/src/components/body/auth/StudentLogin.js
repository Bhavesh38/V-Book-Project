import React, { useState } from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from "react-router-dom";


import "./Login.css";
const StudentLogin = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleFormData = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        console.log(formData);
    }
    return (
        <div>
            <form className='register_form'>

                <input placeholder='Email' type="text" required name="email" value={formData.email} onChange={handleFormData} />

                <input placeholder='Password' type="password" required name="password" value={formData.password} onChange={handleFormData} />
                <div className='remebermeAndForgetPassword'>
                    <span className='rememberMe'>Remember me <input type="checkbox" /></span>
                    <span className='forgetPassword'>Forget Password?</span>
                </div>
                <button className='registerButton'>Login as a Student</button>
                <div className='register_form_divider'>
                    <hr />
                    <span>or</span>
                    <hr />
                </div>
                <div className='register_form_googleSignInButton'>
                    <GoogleIcon style={{ color: "red" }} />
                    <span>Sign In with Google</span>
                </div>
                <div className='register_form_bottm'>
                    <span>Not registered? <Link to="/register">Register here</Link></span>
                </div>
            </form>
        </div>
    )
}

export default StudentLogin
