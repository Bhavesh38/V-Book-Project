import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Fragment } from "react/cjs/react.production.min";
import axios from "axios";
import { showErrMsg, showSuccessMsg } from "../../utils/notification/Notification";

const ActivationEmail = () => {
	const param = useParams();
	const [err, setErr] = useState("");
	const [success, setSuccess] = useState(false);
	useEffect(() => {
		const activationEmail = async () => {
			try {
				const url = `http://localhost:3001/user/${param.id}/verify/${param.token}`;
				const { data } = await axios.get(url);
				console.log(data);
				// setValidUrl(true);
				// const res = await axios.post("/user/activation", {
				//   activation_token,
				// });
				// console.log(res);
				setSuccess(true);
			} catch (error) {
				console.log(err);
				setSuccess(false);
			}
		};
		activationEmail();
	}, [param]);
	return (
		<Fragment>
			{success ? (
				<div>
					{/* <img src={success} alt="success_img" className={styles.success_img} /> */}
					<h1>Email verified successfully</h1>
					<Link to="/login">
						<button>Login</button>
					</Link>
				</div>
			) : (
				<h1>404 Not Found</h1>
			)}
		</Fragment>
		// <>
		//   <Helmet>
		//     <title>Activate your account</title>
		//   </Helmet>
		//   <div className="activate">
		//     {err && showErrMsg(err)}
		//     {success && showSuccessMsg(success)}
		//   </div>
		// </>
	);
};

export default ActivationEmail;
