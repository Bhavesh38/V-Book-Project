import React, { useState } from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from "react-router-dom";

import "./Register.css";
const TeacherRegister = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        cPassword: "",
        dob: "",
        phone: "",
        highestDegree: "",
        address: "",
        isTeacher: true

    });

    const handleFormData = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        console.log(formData);
    }
    return (
        <div className='teacherRegister'>
            <form className='register_form'>
                <input placeholder='Name' type="text" required name="name" value={formData.name} onChange={handleFormData} />
                <input placeholder='Email' type="text" required name="email" value={formData.email} onChange={handleFormData} />
                <input placeholder='Phone Number' type="tel" required name="phone" value={formData.phone} onChange={handleFormData} />
                <input placeholder='Highest Degree' type="text" required name="highestDegree" value={formData.highestDegree} onChange={handleFormData} />
                <label for="highestdegree">Upload Your Highest Degree</label>
                <input type="file" id="highestdegree" />
                <label for="aadhar_pan">Upload Your Aadhar/Pan Card</label>
                <input type="file" id="aadhar_pan" />
                <label for="dob">Date of birth</label>
                <input type="date" id="dob" name="dob" value={formData.dob} required onChange={handleFormData}
                    style={{ marginTop: "0" }}
                />
                <input placeholder='Address' type="text" name="address" value={formData.address} required onChange={handleFormData} />
                <input placeholder='Password' type="password" required name="password" value={formData.password} onChange={handleFormData} />
                <input placeholder='Confrim Password' type="password" required name="cPassword" value={formData.cPassword} onChange={handleFormData} />
                <div className='remebermeAndForgetPassword'>
                    <span className='rememberMe'>Remember me <input type="checkbox" /></span>
                    <span className='forgetPassword'>Forget Password?</span>
                </div>
                <button className='registerButton'>Register as a Teacher</button>
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

export default TeacherRegister
