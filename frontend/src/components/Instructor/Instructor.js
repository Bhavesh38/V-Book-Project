import React from 'react';
import { Link } from 'react-router-dom';




import "./Instructor.css";
const Instructor = () => {
    return (
        <div className='instructor'>
            <div className='instructor_left'>
                <Link to="/instructorPortal/newBook/id">
                    New Book +
                </Link>
                <Link to="/instructorPortal/newBook/id">
                    Save Book
                </Link>
                <Link to="/instructorPortal/newBook/id">
                    Untitled Book
                </Link>
                <Link to="/instructorPortal/newBook/id">
                    Draft
                </Link>
            </div>
            <div className='instructor_right'>
                <img src="https://pixy.org/src/477/4774988.jpg" alt="img.png" />
            </div>
        </div>
    )
}

export default Instructor
