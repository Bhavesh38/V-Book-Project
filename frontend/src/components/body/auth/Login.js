import React, { useState, useEffect } from "react";
import StudentLogin from "./StudentLogin";
import TeahcerLogin from "./TeahcerLogin";

import "./Login.css";
const Login = () => {
	const [studentLoginFormActiveness, setStudentLoginFormActiveness] = useState(true);
	const [teacherLoginFormActiveness, setTeacherLoginFormActiveness] = useState(false);

	useEffect(() => {
		setStudentLoginFormActiveness(true);
		setTeacherLoginFormActiveness(false);
	}, []);

	return (
		<div className="login">
			<h1>EduSpace</h1>
			<h3>Login</h3>
			<p>See Your growth and success!</p>
			<div className="login_form_heading">
				<span
					onClick={() => {
						setStudentLoginFormActiveness(true);
						setTeacherLoginFormActiveness(false);
					}}
					className={studentLoginFormActiveness && "login_form_heading_student_active"}
				>
					For Students
				</span>
				<span
					onClick={() => {
						setStudentLoginFormActiveness(false);
						setTeacherLoginFormActiveness(true);
					}}
					className={teacherLoginFormActiveness && "login_form_heading_teacher_active"}
				>
					For Teachers
				</span>
			</div>
			{studentLoginFormActiveness && <StudentLogin />}
			{teacherLoginFormActiveness && <TeahcerLogin />}
		</div>
	);
};

export default Login;

// import React, { useState } from "react";
// import { Image, Form, Button } from "antd";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Helmet } from "react-helmet";
// import {
//   showErrMsg,
//   showSuccessMsg,
// } from "../../utils/notification/Notification";
// import "./auth.css";
// import { dispatchLogin } from "../../../redux/actions/authAction";
// import { useDispatch } from "react-redux";
// import { isEmpty, isEmail } from "../../utils/validation/Validation";
// const initialState = {
//   email: "",
//   password: "",
//   err: "",
//   success: "",
// };

// const Login = () => {
//   const [formDataUser, setFormDataUser] = useState(initialState);
//   const dispatch = useDispatch();
//   const history = useNavigate();
//   const { email, password, err, success } = formDataUser;
//   const handleChange = (e) => {
//     setFormDataUser({
//       ...formDataUser,
//       [e.target.name]: e.target.value,
//       err: "",
//       success: "",
//     });
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (isEmpty(email) | isEmpty(password))
//       return setFormDataUser({
//         ...formDataUser,
//         err: "Please fill in all fields",
//         success: "",
//       });

//     if (!isEmail(email))
//       return setFormDataUser({
//         ...formDataUser,
//         err: "Invalid email",
//         success: "",
//       });
//     try {
//       const res = await axios.post("/user/login", { email, password });
//       setFormDataUser({ ...formDataUser, err: "", success: res.data.msg }); // true
//       dispatch(dispatchLogin());
//       localStorage.setItem("firstLogin", true);

//       history("/");
//     } catch (err) {
//       err.response.data.msg &&
//         setFormDataUser({
//           ...formDataUser,
//           err: err.response.data.msg,
//           success: "",
//         });
//     }
//   };

//   const inputs = document.querySelectorAll(".input");

//   function addcl() {
//     let parent = this.parentNode.parentNode;
//     parent.classList.add("focus");
//   }

//   function remcl() {
//     let parent = this.parentNode.parentNode;
//     if (this.value === "") {
//       parent.classList.remove("focus");
//     }
//   }

//   inputs.forEach((inputa) => {
//     inputa.addEventListener("focus", addcl);
//     inputa.addEventListener("blur", remcl);
//   });

//   return (
//     <>
//       <Helmet>
//         <title>login</title>
//       </Helmet>
//       <div className="container_login">
//         <img className="wave" src="https://i.imgur.com/FKKMfGt.png" alt="img.png" />
//         <div className="container">
//           <div className="img">
//             <Image src="https://i.imgur.com/gUMFS8G.png" preview={false} />
//           </div>
//           <div className="login-content">
//             <form onSubmit={handleSubmit}>
//               <Image src="https://svgshare.com/i/XJn.svg " preview={false} />
//               <h2 className="title">Welcome</h2>
//               {err && showErrMsg(err)}
//               {success && showSuccessMsg(success)}
//               <div className="input-div one">
//                 <div className="i">
//                   FiUser
//                 </div>
//                 <div className="div">
//                   <input
//                     name="email"
//                     value={email}
//                     type="text"
//                     className="input"
//                     placeholder="Email"
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="input-div pass">
//                 <div className="i">
//                   AiFillLock
//                 </div>
//                 <div className="div">
//                   <input
//                     name="password"
//                     value={password}
//                     type="password"
//                     className="input"
//                     placeholder="Password"
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//               </div>
//               <Link className="forgot" to="/forgot_password">
//                 Forgot Password?
//               </Link>
//               <button type="submit" className="btn">
//                 Login
//               </button>
//               <p>
//                 New Visiter?{" "}
//                 <Link className="register" to="/register">
//                   Register
//                   BiRightArrowAlt
//                 </Link>
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;
