import { Card, Button } from "react-bootstrap";
import React from "react";
import Slider from "react-slick";

const Cards = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
	};

	return (
		<div class="container">
			<div heading2>
				<h2 class="mt-2">TOP COURSES</h2>
			</div>
			<div class="row gy-3 my-3">
				<Slider {...settings}>
					<div class="col-sm-6 col-md-4 col-lg-3">
						<Card style={{ width: "15rem" }}>
							<Card style={{ height: "38rem" }}>
								<Card.Img variant="top" src="img/Thermodynamics.jpg" class="w-100" />
								<Card.Body>
									<Card.Title>Thermodynamics</Card.Title>
									<Card.Text>Some quick example text to build on the card title and make up the bulk of.</Card.Text>
									<Button variant="secondary" class="cards111">
										Enroll Now
									</Button>
								</Card.Body>
							</Card>
						</Card>
					</div>

					<div class="col-sm-6 col-md-4 col-lg-3">
						<Card style={{ width: "15rem" }}>
							<Card style={{ height: "38rem" }}>
								<Card.Img variant="top" src="img/electrostatics.jpg" class="w-100" />
								<Card.Body>
									<Card.Title>Electrostatics</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text
										to build on the card.
									</Card.Text>
									<Button variant="primary">Enroll Now</Button>
								</Card.Body>
							</Card>
						</Card>
					</div>

					<div class="col-sm-6 col-md-4 col-lg-3">
						<Card style={{ width: "15rem" }}>
							<Card style={{ height: "38rem" }}>
								<Card.Img variant="top" src="img/fluid.jpg" class="w-100" />
								<Card.Body>
									<Card.Title>Fluid Dynamics</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text
										to build on the card title and make up the bulk of the card's content.
									</Card.Text>
									<Button variant="primary">Enroll Now</Button>
								</Card.Body>
							</Card>
						</Card>
					</div>

					<div class="col-sm-6 col-md-4 col-lg-3">
						<Card style={{ width: "15rem" }}>
							<Card style={{ height: "38rem" }}>
								<Card.Img variant="top" src="img/diversityInLivingWorld.jpg" class="w-100" />
								<Card.Body>
									<Card.Title>DIVERSITY IN THE LIVING WORLD.</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text
										to build on the card title and make up the bulk of the card's content.
									</Card.Text>
									<Button variant="primary">Enroll Now</Button>
								</Card.Body>
							</Card>
						</Card>
					</div>

					<div class="col-sm-6 col-md-4 col-lg-3">
						<Card style={{ width: "15rem" }}>
							<Card style={{ height: "38rem" }}>
								<Card.Img variant="top" src="img/Thermodynamics.jpg" class="w-100" />
								<Card.Body>
									<Card.Title>Thermodynamics</Card.Title>
									<Card.Text>Some quick example text to build on the card title and make up the bulk of.</Card.Text>
									<Button variant="secondary" class="cards111">
										Enroll Now
									</Button>
								</Card.Body>
							</Card>
						</Card>
					</div>

					<div class="col-sm-6 col-md-4 col-lg-3">
						<Card style={{ width: "15rem" }}>
							<Card style={{ height: "38rem" }}>
								<Card.Img variant="top" src="img/electrostatics.jpg" class="w-100" />
								<Card.Body>
									<Card.Title>Electrostatics</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text
										to build on the card.
									</Card.Text>
									<Button variant="primary">Enroll Now</Button>
								</Card.Body>
							</Card>
						</Card>
					</div>
				</Slider>
			</div>

			<div heading2>
				<h2 class="mt-2">UPCOMING COURSES</h2>
			</div>
			<div class="row gy-3 my-3">
				<Slider {...settings}>
					<div class="col-sm-6 col-md-4 col-lg-3">
						<Card style={{ width: "15rem" }}>
							<Card style={{ height: "38rem" }}>
								<Card.Img variant="top" src="img/Thermodynamics.jpg" class="w-100" />
								<Card.Body>
									<Card.Title>Thermodynamics</Card.Title>
									<Card.Text>Some quick example text to build on the card title and make up the bulk of.</Card.Text>
									<Button variant="secondary" class="cards111">
										Enroll Now
									</Button>
								</Card.Body>
							</Card>
						</Card>
					</div>

					<div class="col-sm-6 col-md-4 col-lg-3">
						<Card style={{ width: "15rem" }}>
							<Card style={{ height: "38rem" }}>
								<Card.Img variant="top" src="img/electrostatics.jpg" class="w-100" />
								<Card.Body>
									<Card.Title>Electrostatics</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text
										to build on the card.
									</Card.Text>
									<Button variant="primary">Enroll Now</Button>
								</Card.Body>
							</Card>
						</Card>
					</div>

					<div class="col-sm-6 col-md-4 col-lg-3">
						<Card style={{ width: "15rem" }}>
							<Card style={{ height: "38rem" }}>
								<Card.Img variant="top" src="img/fluid.jpg" class="w-100" />
								<Card.Body>
									<Card.Title>Fluid Dynamics</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text
										to build on the card title and make up the bulk of the card's content.
									</Card.Text>
									<Button variant="primary">Enroll Now</Button>
								</Card.Body>
							</Card>
						</Card>
					</div>

					<div class="col-sm-6 col-md-4 col-lg-3">
						<Card style={{ width: "15rem" }}>
							<Card style={{ height: "38rem" }}>
								<Card.Img variant="top" src="img/diversityInLivingWorld.jpg" class="w-100" />
								<Card.Body>
									<Card.Title>DIVERSITY IN THE LIVING WORLD.</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text
										to build on the card title and make up the bulk of the card's content.
									</Card.Text>
									<Button variant="primary">Enroll Now</Button>
								</Card.Body>
							</Card>
						</Card>
					</div>

					<div class="col-sm-6 col-md-4 col-lg-3">
						<Card style={{ width: "15rem" }}>
							<Card style={{ height: "38rem" }}>
								<Card.Img variant="top" src="img/Thermodynamics.jpg" class="w-100" />
								<Card.Body>
									<Card.Title>Thermodynamics</Card.Title>
									<Card.Text>Some quick example text to build on the card title and make up the bulk of.</Card.Text>
									<Button variant="secondary" class="cards111">
										Enroll Now
									</Button>
								</Card.Body>
							</Card>
						</Card>
					</div>

					<div class="col-sm-6 col-md-4 col-lg-3">
						<Card style={{ width: "15rem" }}>
							<Card style={{ height: "38rem" }}>
								<Card.Img variant="top" src="img/electrostatics.jpg" class="w-100" />
								<Card.Body>
									<Card.Title>Electrostatics</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text
										to build on the card.
									</Card.Text>
									<Button variant="primary">Enroll Now</Button>
								</Card.Body>
							</Card>
						</Card>
					</div>
				</Slider>
			</div>

			<div heading2>
				<h2 class="mt-2">ONLINE COURSES</h2>
			</div>
			<div class="row gy-3 my-3">
				<Slider {...settings}>
					<div class="col-sm-6 col-md-4 col-lg-3">
						<Card style={{ width: "15rem" }}>
							<Card style={{ height: "38rem" }}>
								<Card.Img variant="top" src="img/Thermodynamics.jpg" class="w-100" />
								<Card.Body>
									<Card.Title>Thermodynamics</Card.Title>
									<Card.Text>Some quick example text to build on the card title and make up the bulk of.</Card.Text>
									<Button variant="secondary" class="cards111">
										Enroll Now
									</Button>
								</Card.Body>
							</Card>
						</Card>
					</div>

					<div class="col-sm-6 col-md-4 col-lg-3">
						<Card style={{ width: "15rem" }}>
							<Card style={{ height: "38rem" }}>
								<Card.Img variant="top" src="img/electrostatics.jpg" class="w-100" />
								<Card.Body>
									<Card.Title>Electrostatics</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text
										to build on the card.
									</Card.Text>
									<Button variant="primary">Enroll Now</Button>
								</Card.Body>
							</Card>
						</Card>
					</div>

					<div class="col-sm-6 col-md-4 col-lg-3">
						<Card style={{ width: "15rem" }}>
							<Card style={{ height: "38rem" }}>
								<Card.Img variant="top" src="img/fluid.jpg" class="w-100" />
								<Card.Body>
									<Card.Title>Fluid Dynamics</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text
										to build on the card title and make up the bulk of the card's content.
									</Card.Text>
									<Button variant="primary">Enroll Now</Button>
								</Card.Body>
							</Card>
						</Card>
					</div>

					<div class="col-sm-6 col-md-4 col-lg-3">
						<Card style={{ width: "15rem" }}>
							<Card style={{ height: "38rem" }}>
								<Card.Img variant="top" src="img/diversityInLivingWorld.jpg" class="w-100" />
								<Card.Body>
									<Card.Title>DIVERSITY IN THE LIVING WORLD.</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text
										to build on the card title and make up the bulk of the card's content.
									</Card.Text>
									<Button variant="primary">Enroll Now</Button>
								</Card.Body>
							</Card>
						</Card>
					</div>

					<div class="col-sm-6 col-md-4 col-lg-3">
						<Card style={{ width: "15rem" }}>
							<Card style={{ height: "38rem" }}>
								<Card.Img variant="top" src="img/Thermodynamics.jpg" class="w-100" />
								<Card.Body>
									<Card.Title>Thermodynamics</Card.Title>
									<Card.Text>Some quick example text to build on the card title and make up the bulk of.</Card.Text>
									<Button variant="secondary" class="cards111">
										Enroll Now
									</Button>
								</Card.Body>
							</Card>
						</Card>
					</div>

					<div class="col-sm-6 col-md-4 col-lg-3">
						<Card style={{ width: "15rem" }}>
							<Card style={{ height: "38rem" }}>
								<Card.Img variant="top" src="img/electrostatics.jpg" class="w-100" />
								<Card.Body>
									<Card.Title>Electrostatics</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text
										to build on the card.
									</Card.Text>
									<Button variant="primary">Enroll Now</Button>
								</Card.Body>
							</Card>
						</Card>
					</div>
				</Slider>
			</div>

			<div heading2>
				<h2 class="mt-2">RECOMMENDED COURSES</h2>
			</div>
			<div class="row gy-3 my-3">
				<Slider {...settings}>
					<div class="col-sm-6 col-md-4 col-lg-3">
						<Card style={{ width: "15rem" }}>
							<Card style={{ height: "38rem" }}>
								<Card.Img variant="top" src="img/Thermodynamics.jpg" class="w-100" />
								<Card.Body>
									<Card.Title>Thermodynamics</Card.Title>
									<Card.Text>Some quick example text to build on the card title and make up the bulk of.</Card.Text>
									<Button variant="secondary" class="cards111">
										Enroll Now
									</Button>
								</Card.Body>
							</Card>
						</Card>
					</div>

					<div class="col-sm-6 col-md-4 col-lg-3">
						<Card style={{ width: "15rem" }}>
							<Card style={{ height: "38rem" }}>
								<Card.Img variant="top" src="img/electrostatics.jpg" class="w-100" />
								<Card.Body>
									<Card.Title>Electrostatics</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text
										to build on the card.
									</Card.Text>
									<Button variant="primary">Enroll Now</Button>
								</Card.Body>
							</Card>
						</Card>
					</div>

					<div class="col-sm-6 col-md-4 col-lg-3">
						<Card style={{ width: "15rem" }}>
							<Card style={{ height: "38rem" }}>
								<Card.Img variant="top" src="img/fluid.jpg" class="w-100" />
								<Card.Body>
									<Card.Title>Fluid Dynamics</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text
										to build on the card title and make up the bulk of the card's content.
									</Card.Text>
									<Button variant="primary">Enroll Now</Button>
								</Card.Body>
							</Card>
						</Card>
					</div>

					<div class="col-sm-6 col-md-4 col-lg-3">
						<Card style={{ width: "15rem" }}>
							<Card style={{ height: "38rem" }}>
								<Card.Img variant="top" src="img/diversityInLivingWorld.jpg" class="w-100" />
								<Card.Body>
									<Card.Title>DIVERSITY IN THE LIVING WORLD.</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text
										to build on the card title and make up the bulk of the card's content.
									</Card.Text>
									<Button variant="primary">Enroll Now</Button>
								</Card.Body>
							</Card>
						</Card>
					</div>

					<div class="col-sm-6 col-md-4 col-lg-3">
						<Card style={{ width: "15rem" }}>
							<Card style={{ height: "38rem" }}>
								<Card.Img variant="top" src="img/Thermodynamics.jpg" class="w-100" />
								<Card.Body>
									<Card.Title>Thermodynamics</Card.Title>
									<Card.Text>Some quick example text to build on the card title and make up the bulk of.</Card.Text>
									<Button variant="secondary" class="cards111">
										Enroll Now
									</Button>
								</Card.Body>
							</Card>
						</Card>
					</div>

					<div class="col-sm-6 col-md-4 col-lg-3">
						<Card style={{ width: "15rem" }}>
							<Card style={{ height: "38rem" }}>
								<Card.Img variant="top" src="img/electrostatics.jpg" class="w-100" />
								<Card.Body>
									<Card.Title>Electrostatics</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text
										to build on the card.
									</Card.Text>
									<Button variant="primary">Enroll Now</Button>
								</Card.Body>
							</Card>
						</Card>
					</div>
				</Slider>
			</div>

			<div heading2>
				<h2 class="mt-2">NEW COURSES</h2>
			</div>
			<div class="row gy-3 my-3">
				<Slider {...settings}>
					<div class="col-sm-6 col-md-4 col-lg-3">
						<Card style={{ width: "15rem" }}>
							<Card style={{ height: "38rem" }}>
								<Card.Img variant="top" src="img/Thermodynamics.jpg" class="w-100" />
								<Card.Body>
									<Card.Title>Thermodynamics</Card.Title>
									<Card.Text>Some quick example text to build on the card title and make up the bulk of.</Card.Text>
									<Button variant="secondary" class="cards111">
										Enroll Now
									</Button>
								</Card.Body>
							</Card>
						</Card>
					</div>

					<div class="col-sm-6 col-md-4 col-lg-3">
						<Card style={{ width: "15rem" }}>
							<Card style={{ height: "38rem" }}>
								<Card.Img variant="top" src="img/electrostatics.jpg" class="w-100" />
								<Card.Body>
									<Card.Title>Electrostatics</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text
										to build on the card.
									</Card.Text>
									<Button variant="primary">Enroll Now</Button>
								</Card.Body>
							</Card>
						</Card>
					</div>

					<div class="col-sm-6 col-md-4 col-lg-3">
						<Card style={{ width: "15rem" }}>
							<Card style={{ height: "38rem" }}>
								<Card.Img variant="top" src="img/fluid.jpg" class="w-100" />
								<Card.Body>
									<Card.Title>Fluid Dynamics</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text
										to build on the card title and make up the bulk of the card's content.
									</Card.Text>
									<Button variant="primary">Enroll Now</Button>
								</Card.Body>
							</Card>
						</Card>
					</div>

					<div class="col-sm-6 col-md-4 col-lg-3">
						<Card style={{ width: "15rem" }}>
							<Card style={{ height: "38rem" }}>
								<Card.Img variant="top" src="img/diversityInLivingWorld.jpg" class="w-100" />
								<Card.Body>
									<Card.Title>DIVERSITY IN THE LIVING WORLD.</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text
										to build on the card title and make up the bulk of the card's content.
									</Card.Text>
									<Button variant="primary">Enroll Now</Button>
								</Card.Body>
							</Card>
						</Card>
					</div>

					<div class="col-sm-6 col-md-4 col-lg-3">
						<Card style={{ width: "15rem" }}>
							<Card style={{ height: "38rem" }}>
								<Card.Img variant="top" src="img/Thermodynamics.jpg" class="w-100" />
								<Card.Body>
									<Card.Title>Thermodynamics</Card.Title>
									<Card.Text>Some quick example text to build on the card title and make up the bulk of.</Card.Text>
									<Button variant="secondary" class="cards111">
										Enroll Now
									</Button>
								</Card.Body>
							</Card>
						</Card>
					</div>

					<div class="col-sm-6 col-md-4 col-lg-3">
						<Card style={{ width: "15rem" }}>
							<Card style={{ height: "38rem" }}>
								<Card.Img variant="top" src="img/electrostatics.jpg" class="w-100" />
								<Card.Body>
									<Card.Title>Electrostatics</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text
										to build on the card.
									</Card.Text>
									<Button variant="primary">Enroll Now</Button>
								</Card.Body>
							</Card>
						</Card>
					</div>
				</Slider>
			</div>

			<div heading2>
				<h2 class="mt-2">UPDATED COURSES</h2>
			</div>
			<div class="row gy-3 my-3">
				<Slider {...settings}>
					<div class="col-sm-6 col-md-4 col-lg-3">
						<Card style={{ width: "15rem" }}>
							<Card style={{ height: "38rem" }}>
								<Card.Img variant="top" src="img/Thermodynamics.jpg" class="w-100" />
								<Card.Body>
									<Card.Title>Thermodynamics</Card.Title>
									<Card.Text>Some quick example text to build on the card title and make up the bulk of.</Card.Text>
									<Button variant="secondary" class="cards111">
										Enroll Now
									</Button>
								</Card.Body>
							</Card>
						</Card>
					</div>

					<div class="col-sm-6 col-md-4 col-lg-3">
						<Card style={{ width: "15rem" }}>
							<Card style={{ height: "38rem" }}>
								<Card.Img variant="top" src="img/electrostatics.jpg" class="w-100" />
								<Card.Body>
									<Card.Title>Electrostatics</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text
										to build on the card.
									</Card.Text>
									<Button variant="primary">Enroll Now</Button>
								</Card.Body>
							</Card>
						</Card>
					</div>

					<div class="col-sm-6 col-md-4 col-lg-3">
						<Card style={{ width: "15rem" }}>
							<Card style={{ height: "38rem" }}>
								<Card.Img variant="top" src="img/fluid.jpg" class="w-100" />
								<Card.Body>
									<Card.Title>Fluid Dynamics</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text
										to build on the card title and make up the bulk of the card's content.
									</Card.Text>
									<Button variant="primary">Enroll Now</Button>
								</Card.Body>
							</Card>
						</Card>
					</div>

					<div class="col-sm-6 col-md-4 col-lg-3">
						<Card style={{ width: "15rem" }}>
							<Card style={{ height: "38rem" }}>
								<Card.Img variant="top" src="img/diversityInLivingWorld.jpg" class="w-100" />
								<Card.Body>
									<Card.Title>DIVERSITY IN THE LIVING WORLD.</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text
										to build on the card title and make up the bulk of the card's content.
									</Card.Text>
									<Button variant="primary">Enroll Now</Button>
								</Card.Body>
							</Card>
						</Card>
					</div>

					<div class="col-sm-6 col-md-4 col-lg-3">
						<Card style={{ width: "15rem" }}>
							<Card style={{ height: "38rem" }}>
								<Card.Img variant="top" src="img/Thermodynamics.jpg" class="w-100" />
								<Card.Body>
									<Card.Title>Thermodynamics</Card.Title>
									<Card.Text>Some quick example text to build on the card title and make up the bulk of.</Card.Text>
									<Button variant="secondary" class="cards111">
										Enroll Now
									</Button>
								</Card.Body>
							</Card>
						</Card>
					</div>

					<div class="col-sm-6 col-md-4 col-lg-3">
						<Card style={{ width: "15rem" }}>
							<Card style={{ height: "38rem" }}>
								<Card.Img variant="top" src="img/electrostatics.jpg" class="w-100" />
								<Card.Body>
									<Card.Title>Electrostatics</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text
										to build on the card.
									</Card.Text>
									<Button variant="primary">Enroll Now</Button>
								</Card.Body>
							</Card>
						</Card>
					</div>
				</Slider>
			</div>

			<div heading2>
				<h2 class="mt-2">ONGOING COURSES</h2>
			</div>
			<div class="row gy-3 my-3">
				<Slider {...settings}>
					<div class="col-sm-6 col-md-4 col-lg-3">
						<Card style={{ width: "15rem" }}>
							<Card style={{ height: "38rem" }}>
								<Card.Img variant="top" src="img/Thermodynamics.jpg" class="w-100" />
								<Card.Body>
									<Card.Title>Thermodynamics</Card.Title>
									<Card.Text>Some quick example text to build on the card title and make up the bulk of.</Card.Text>
									<Button variant="secondary" class="cards111">
										Enroll Now
									</Button>
								</Card.Body>
							</Card>
						</Card>
					</div>

					<div class="col-sm-6 col-md-4 col-lg-3">
						<Card style={{ width: "15rem" }}>
							<Card style={{ height: "38rem" }}>
								<Card.Img variant="top" src="img/electrostatics.jpg" class="w-100" />
								<Card.Body>
									<Card.Title>Electrostatics</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text
										to build on the card.
									</Card.Text>
									<Button variant="primary">Enroll Now</Button>
								</Card.Body>
							</Card>
						</Card>
					</div>

					<div class="col-sm-6 col-md-4 col-lg-3">
						<Card style={{ width: "15rem" }}>
							<Card style={{ height: "38rem" }}>
								<Card.Img variant="top" src="img/fluid.jpg" class="w-100" />
								<Card.Body>
									<Card.Title>Fluid Dynamics</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text
										to build on the card title and make up the bulk of the card's content.
									</Card.Text>
									<Button variant="primary">Enroll Now</Button>
								</Card.Body>
							</Card>
						</Card>
					</div>

					<div class="col-sm-6 col-md-4 col-lg-3">
						<Card style={{ width: "15rem" }}>
							<Card style={{ height: "38rem" }}>
								<Card.Img variant="top" src="img/diversityInLivingWorld.jpg" class="w-100" />
								<Card.Body>
									<Card.Title>DIVERSITY IN THE LIVING WORLD.</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text
										to build on the card title and make up the bulk of the card's content.
									</Card.Text>
									<Button variant="primary">Enroll Now</Button>
								</Card.Body>
							</Card>
						</Card>
					</div>

					<div class="col-sm-6 col-md-4 col-lg-3">
						<Card style={{ width: "15rem" }}>
							<Card style={{ height: "38rem" }}>
								<Card.Img variant="top" src="img/Thermodynamics.jpg" class="w-100" />
								<Card.Body>
									<Card.Title>Thermodynamics</Card.Title>
									<Card.Text>Some quick example text to build on the card title and make up the bulk of.</Card.Text>
									<Button variant="secondary" class="cards111">
										Enroll Now
									</Button>
								</Card.Body>
							</Card>
						</Card>
					</div>

					<div class="col-sm-6 col-md-4 col-lg-3">
						<Card style={{ width: "15rem" }}>
							<Card style={{ height: "38rem" }}>
								<Card.Img variant="top" src="img/electrostatics.jpg" class="w-100" />
								<Card.Body>
									<Card.Title>Electrostatics</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text
										to build on the card.
									</Card.Text>
									<Button variant="primary">Enroll Now</Button>
								</Card.Body>
							</Card>
						</Card>
					</div>
				</Slider>
			</div>

			<div heading2>
				<h2 class="mt-2">EXTRA COURSES</h2>
			</div>
			<div class="row gy-3 my-3">
				<Slider {...settings}>
					<div class="col-sm-6 col-md-4 col-lg-3">
						<Card style={{ width: "15rem" }}>
							<Card style={{ height: "38rem" }}>
								<Card.Img variant="top" src="img/Thermodynamics.jpg" class="w-100" />
								<Card.Body>
									<Card.Title>Thermodynamics</Card.Title>
									<Card.Text>Some quick example text to build on the card title and make up the bulk of.</Card.Text>
									<Button variant="secondary" class="cards111">
										Enroll Now
									</Button>
								</Card.Body>
							</Card>
						</Card>
					</div>

					<div class="col-sm-6 col-md-4 col-lg-3">
						<Card style={{ width: "15rem" }}>
							<Card style={{ height: "38rem" }}>
								<Card.Img variant="top" src="img/electrostatics.jpg" class="w-100" />
								<Card.Body>
									<Card.Title>Electrostatics</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text
										to build on the card.
									</Card.Text>
									<Button variant="primary">Enroll Now</Button>
								</Card.Body>
							</Card>
						</Card>
					</div>

					<div class="col-sm-6 col-md-4 col-lg-3">
						<Card style={{ width: "15rem" }}>
							<Card style={{ height: "38rem" }}>
								<Card.Img variant="top" src="img/fluid.jpg" class="w-100" />
								<Card.Body>
									<Card.Title>Fluid Dynamics</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text
										to build on the card title and make up the bulk of the card's content.
									</Card.Text>
									<Button variant="primary">Enroll Now</Button>
								</Card.Body>
							</Card>
						</Card>
					</div>

					<div class="col-sm-6 col-md-4 col-lg-3">
						<Card style={{ width: "15rem" }}>
							<Card style={{ height: "38rem" }}>
								<Card.Img variant="top" src="img/diversityInLivingWorld.jpg" class="w-100" />
								<Card.Body>
									<Card.Title>DIVERSITY IN THE LIVING WORLD.</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text
										to build on the card title and make up the bulk of the card's content.
									</Card.Text>
									<Button variant="primary">Enroll Now</Button>
								</Card.Body>
							</Card>
						</Card>
					</div>

					<div class="col-sm-6 col-md-4 col-lg-3">
						<Card style={{ width: "15rem" }}>
							<Card style={{ height: "38rem" }}>
								<Card.Img variant="top" src="img/Thermodynamics.jpg" class="w-100" />
								<Card.Body>
									<Card.Title>Thermodynamics</Card.Title>
									<Card.Text>Some quick example text to build on the card title and make up the bulk of.</Card.Text>
									<Button variant="secondary" class="cards111">
										Enroll Now
									</Button>
								</Card.Body>
							</Card>
						</Card>
					</div>

					<div class="col-sm-6 col-md-4 col-lg-3">
						<Card style={{ width: "15rem" }}>
							<Card style={{ height: "38rem" }}>
								<Card.Img variant="top" src="img/electrostatics.jpg" class="w-100" />
								<Card.Body>
									<Card.Title>Electrostatics</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text
										to build on the card.
									</Card.Text>
									<Button variant="primary">Enroll Now</Button>
								</Card.Body>
							</Card>
						</Card>
					</div>
				</Slider>
			</div>
		</div>
	);
};

export default Cards;
