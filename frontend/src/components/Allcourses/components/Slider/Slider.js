import React from 'react'
import {Carousel} from 'react-bootstrap'
import "./Slider.css"

const Slider = () => {
    return (
        <>

<div class="dis_head">
      {/* <div class="heading">
        <h2 data-text="ALL COURSES">ALL COURSES</h2>
      </div> */}
    </div>
        <div class = 'slider'>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <center><img
                        className="d-block w-50"
                        src="https://images.pexels.com/photos/333850/pexels-photo-333850.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=100"
                        alt="First slide"
                    /></center>
                    <Carousel.Caption>
                        <h3>This is the first slide!</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <center><img
                        className="d-block w-50"
                        src="https://images.pexels.com/photos/1480688/pexels-photo-1480688.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1200&w=1200"
                        alt="Second slide"
                    /></center>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <center><img
                        className="d-block w-50"
                        src="https://images.pexels.com/photos/1480687/pexels-photo-1480687.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1200&w=1200"
                        alt="Third slide"
                    /></center>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <center><img
                        className="d-block w-50"
                        src="https://images.pexels.com/photos/1480689/pexels-photo-1480689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1200&w=1200"
                        alt="Third slide"
                    /></center>
                    <Carousel.Caption>
                        <h3>Fourth slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>
        </>
    )
}

export default Slider