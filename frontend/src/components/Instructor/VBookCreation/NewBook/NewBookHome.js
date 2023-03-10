import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import "./NewBookHome.css"

function NewBookHome() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        title: "",
        author: ""
    })
    const onChangeValue = (e) => {
        // console.log(e.target.value);
        console.log(values);
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    }
    const submit = (e) => {
        e.preventDefault();

    }
    return (
        <div className='home'>
            <h2>Make Your E-Book</h2>
            <form>
                <div className="chapter_name form-group col-md-12 ">
                    <label className="font-weight-bold"><strong> Chapter Name</strong> <span className="required"> * </span> </label>
                    <input type="text" name="title" onChange={onChangeValue} className="form-control" placeholder="Title" required />
                </div>
                <div className="form-group col-md-12">
                    <label className="font-weight-bold"><strong>Author</strong>  <span className="required"> * </span> </label>
                    <input type="text" name="author" onChange={onChangeValue} className="form-control" placeholder="author" required />
                </div>
                {/* <div className="clearfix"></div> */}
                <Link to="/instructorPortal/newBook/id">
                    <button type='submit' onSubmit={submit}>Submit and Next</button>
                </Link>
            </form>
        </div>
    )
}

export default NewBookHome;

