import { Rate } from "antd";
import React from "react";
import "antd/dist/antd.css";
import "./card.css";
import PropTypes from "prop-types";
// import  {Link} from 'react-router-dom'

export default function Card(course) {
  return (
    <div
      className="card-container"
      style={{
        backgroundImage: `url(${course.imageUrl}) `,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain",
      }}
    >
      <section className="card-content">
        <div className="card-title">{course.title}</div>
        <div className="card-footer">
          <div className="rating">
            <Rate 
            disabled 
            color="secondary"
            value={course.rating} 
            style={{ fontSize: 20 ,color: '#fcdb05' }}/>
          </div>
          <div className="price">
            <h5>${course.price}</h5>
          </div>
        </div>
      </section>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired, 
  imageUrl: PropTypes.string,
  price: PropTypes.number,
  rating: PropTypes.number,
};
