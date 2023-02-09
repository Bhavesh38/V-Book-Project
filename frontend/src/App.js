import { Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Home from "./pages/Home/Home";
// import "antd/dist/antd.css";
import "antd/dist/reset.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./components/Navbar/Navbar";
import Subcategory from "./pages/CourseFilter/Subcategory";
import ContactUs from "./components/Contact/ContactUs";
import Footer from "./components/Footer/Footer";

import Login from "./components/body/auth/Login";
import Register from "./components/body/auth/Register";
import ActivationEmail from "./components/body/auth/ActivationEmail";
import axios from "axios";
import { dispatchLogin, dispatchGetUser, fetchUser } from "./redux/actions/authAction";

import NotFound from "./components/utils/NotFound/NotFound";
import ForgotPass from "./components/body/auth/ForgotPassword";
import ResetPass from "./components/body/auth/ResetPassword";
import Coursepage from "./pages/Coursepage/Coursepage";
import AllCourses from "./components/Allcourses/AllCourses";
import AllBooks from "./components/AllBooks/AllBooks";
import Mycourses from "./pages/Mycourses/Mycourses";
import CourseFilter from "./pages/CourseFilter/CourseFilter";
import CheckoutScreen from "./pages/checkout/CheckoutScreen";
import Profile from "./components/body/profile/Profile";
import EditUser from "./components/body/profile/EditUser";

import EditCourse from "./components/body/profile/EditCourse";
import CourseSeacrh from "./pages/CourseSearch/CourseSeacrh";
// import Vbook from "./components/Vbook/Vbook";

import "./App.css";
import NewBookHome from "./components/Instructor/VBookCreation/NewBook/NewBookHome";
import Instructor from "./components/Instructor/Instructor";
import VBookRichTextEdditor from "./components/Instructor/VBookCreation/NewBook/VBookRichTextEdditor";
function App() {
	//Get Acces token
	const dispatch = useDispatch();
	const token = useSelector((state) => state.token);
	const auth = useSelector((state) => state.auth);
	const { isLogged, user, isAdmin } = auth;

	useEffect(() => {
		const firstLogin = localStorage.getItem("firstLogin");
		if (firstLogin) {
			const getToken = async () => {
				// make post request : hey db get me some data and return it to me
				const res = await axios.post("/user/refresh_token", null);
				dispatch({ type: "GET_TOKEN", payload: res.data.access_token });
			};
			getToken();
		}
	}, [auth.isLogged, dispatch]);
	// when refresh the token exsit but the logged change to false that's we do that

	useEffect(() => {
		if (token) {
			const getUser = () => {
				dispatch(dispatchLogin());
				//Get user infor
				return fetchUser(token).then((res) => {
					dispatch(dispatchGetUser(res));
				});
			};
			getUser();
		}
	}, [token, dispatch]);
	return (
		<div className="main">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/courses/:id" element={<Coursepage />} />

				<Route path="/coursesfilter/:topic" element={<CourseFilter />} />
				<Route path="/AllCourses" element={<AllCourses />} />
				<Route path="/ContactUs" element={<ContactUs />} />
				<Route path="/instructorPortal" element={<Instructor />} />
				<Route path="/instructorPortal/newBook" element={<NewBookHome />} />
				<Route path="/instructorPortal/newBook/id" element={<VBookRichTextEdditor />} />
				<Route path="/AllBooks" element={<AllBooks />} />
				<Route path="/Instructorvideo" element={<AllCourses />} />

				<Route path="/Mycourses" element={isLogged ? <Mycourses /> : <NotFound />} />
				<Route path="/checkout" element={isLogged ? <CheckoutScreen /> : <Login />} />

				<Route
					path="/login"
					// element={isLogged ? <NotFound /> : <NotFound />}
					element={!isLogged ? <Login /> : <NotFound />}
				/>
				<Route path="/register" element={isLogged ? <NotFound /> : <Register />} />

				<Route path="/user/:id/verify/:token" element={<ActivationEmail />} />
				{/* path="/user/:id/verify/:token" */}
				{/* <Route

          path="/user/activate/:activation_token"
          element={<ActivationEmail />}
        /> */}
				<Route path="/forgot_password" element={isLogged ? <NotFound /> : <ForgotPass />} />
				<Route path="/user/reset/:token" element={isLogged ? <NotFound /> : <ResetPass />} />
				<Route path="/profile" element={isLogged ? <Profile /> : <NotFound />} />
				<Route path="/edit_user/:id" element={isAdmin ? <EditUser /> : <NotFound />} />
				<Route path="/editcourse/:id" element={user.Teacher || isAdmin ? <EditCourse /> : <NotFound />} />
				<Route path="/search/:keyword" element={<CourseSeacrh />} />
				<Route path="/subcategory/:subcategory" element={<Subcategory />} />

				<Route element={<NotFound />} />
			</Routes>

			<Footer />
		</div>
	);
}

export default App;
