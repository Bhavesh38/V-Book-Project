import Slider from "./components/Slider/Slider";
import Cards from "./components/Cards/Cards";

import ScrollToTop from "react-scroll-to-top";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function AllCourses() {
	return (
		<div className="App">
			<ScrollToTop smooth />

			<Slider />
			<Cards />
		</div>
	);
}

export default AllCourses;
