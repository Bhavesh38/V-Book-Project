import Contact from "./components/Contact";
import Caraousel from "./components/Caraousel";
import Contact2 from "./components/Contact2";

function ContactUs() {
	return (
		<>
			<div className="main container">
				<Contact />
				<Caraousel />
				<Contact2 />
			</div>
			<div className="feedback container">
				<p>Please share your feedback and other queries</p>
				<a href="https://forms.gle/1dyLRS89zT4gTy3UA" target="_blank">
					Google form link
				</a>
			</div>
		</>
	);
}

export default ContactUs;
