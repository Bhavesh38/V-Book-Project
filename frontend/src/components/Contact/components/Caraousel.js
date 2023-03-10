import React from "react";
//import iem_gurukul from "../iem_gurukul.jpg";
import "./Caraousel.css";

export default function Caraousel() {
	return (
		<>
			<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
				<div className="carousel-indicators">
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="0"
						className="active"
						aria-current="true"
						aria-label="Slide 1"
					></button>
					<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
					<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
				</div>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<div className="carousel-caption d-none d-md-block">
							<h5>Gurukul Campus</h5>
							<p>IEM-Collegte of Engineering</p>
						</div>
					</div>
					<div className="carousel-item">
						<div className="carousel-caption d-none d-md-block">
							<h5>Management Campus</h5>
							<p>IEM-Collegte of Engineering</p>
						</div>
					</div>
					<div className="carousel-item">
						<div className="carousel-caption d-none d-md-block">
							<h5>Ashram Campus</h5>
							<p>IEM-Collegte of Engineering</p>
						</div>
					</div>
				</div>
				<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
		</>
	);
}
