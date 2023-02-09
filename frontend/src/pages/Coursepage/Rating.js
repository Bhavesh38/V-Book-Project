import React from "react";
// import { AiFillStar, BsStarHalf, BsStar } from 'react-icons/all'

const Rating = ({ value }) => {
	return (
		<div className="course-rating">
			<span>
				{" "}
				<i> {value >= 1 ? <span>AiFillStar</span> : value >= 0.5 ? <span>BsStarHalf</span> : <span>BsStar</span>} </i>
			</span>
			<span>
				{" "}
				<i> {value >= 2 ? <span>AiFillStar</span> : value >= 1.5 ? <span>BsStarHalf</span> : <span>BsStar</span>} </i>{" "}
			</span>
			<span>
				{" "}
				<i> {value >= 3 ? <span>AiFillStar</span> : value >= 2.5 ? <span>BsStarHalf</span> : <span>BsStar</span>} </i>
			</span>
			<span>
				{" "}
				<i> {value >= 4 ? <span>AiFillStar</span> : value >= 3.5 ? <span>BsStarHalf</span> : <span>BsStar</span>} </i>
			</span>
			<span>
				{" "}
				<i> {value >= 5 ? <span>AiFillStar</span> : value >= 4.5 ? <span>BsStarHalf</span> : <span>BsStar</span>} </i>{" "}
			</span>
			{/* <span>{value} ({text && text})</span> */}
		</div>
	);
};

export default Rating;
