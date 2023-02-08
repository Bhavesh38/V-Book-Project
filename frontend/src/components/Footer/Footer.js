import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
	let d = new Date();
	let n = d.getFullYear();
	return (
		<div className="footer">
			<div className="subfooter">
				<div>
					<img alt="vclassroom.png" src="https://i.imgur.com/4jq68uE.png" className="footer_logo" />
				</div>
			</div>
			<div className="main_footer">
				<div className="get_in_contact">
					<h1>Get in Contact</h1>
					<ul>
						<Link to="/AboutUs" className="lined">
							ABOUT US
						</Link>
						<Link to="/ContactUs" className="lined">
							CONTACT US
						</Link>
						<Link to="/SupportUs" className="lined">
							Support us
						</Link>
					</ul>
				</div>
				<div className="socialmedia_links">
					<h1>Follow Us</h1>
					<div>
						<img src="https://i.imgur.com/pfcIVI9.png" alt="facebook" className="social_icons" />
						<img src="https://i.imgur.com/CBAfZK8.png" alt="instagram" className="social_icons" />
						<img src="https://i.imgur.com/zBvGrB2.png" alt="twitter" className="social_icons" />
					</div>
				</div>
			</div>
			<div className="logo_copyright">
				<img alt="bvooks.png" src="./assets/" className="footer_logo" />
				<div className="copyright">Copyright © {n} Vbook</div>
			</div>
		</div>
	);
};

export default Footer;
