import React from 'react';
import { Link } from 'react-router-dom';




import "./Instructor.css";
const Instructor = () => {
    return (
        <div className='instructor border-t-2 border-[#ffffff] my-6 mx-8'>
            <div className='instructor_left mr-4'>
                <Link to="/instructorPortal/newBook/id">
                    <button className='outline outline-1 rounded-md'><span className='p-4 py-4'>New Book +</span></button>
                </Link>
                <Link to="/instructorPortal/newBook/id">
                    <button className='outline outline-1 rounded-md'><span className='p-4 py-4'>Save Book</span></button>
                </Link>
                <Link to="/instructorPortal/newBook/id">
                    <button className='outline outline-1 rounded-md'><span className='p-4 py-4'>Untitled Book</span></button>
                </Link>
                <Link to="/instructorPortal/newBook/id">
                    <button className='outline outline-1 rounded-md'><span className='p-4 py-4'>Draft</span></button>
                </Link>
            </div>
            <div className='instructor_right ml-4 '>
                <img className='rounded-xl' src="https://img.freepik.com/free-vector/happy-pupils-studying-classroom-isolated-flat-illustration-cartoon-children-characters-sitting-tables-school-lesson_74855-10790.jpg?w=1380&t=st=1690529866~exp=1690530466~hmac=daa0489750754ca94ce33525d5fc7c6318e51549dcce0db3c8671db39863ed80" alt="img.png" />
            </div>
        </div>
    )
}

export default Instructor
