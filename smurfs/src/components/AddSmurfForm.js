import React, { useState } from "react";
import { connect } from 'react-redux';
import "./App.css";

const AddSmurfForm = () => {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
    }

    const changeHandler = e => {
        setInputValue(e.target.value);
        console.log(inputValue);
    };
    return (
        <>
            <form onSubmit={e => handleSubmit(e)}>
                <p>Enter smurf name:</p>
                <input
                    type='text'
                    name='name'
                    onChange={changeHandler}
                />
                <p>Enter smurf age:</p>
                <input
                    type='text'
                    name='age'
                    onChange={changeHandler}
                />
                <p>Enter smurf height:</p>
                <input
                    type='text'
                    name='height'
                    onChange={changeHandler}
                />
                <p>Enter smurf id:</p>
                <input
                    type='text'
                    name='id'
                    onChange={changeHandler}
                />
                <div className="submit-btn">
                    <button type='submit'>Add Smurf</button>
                </div>
            </form>
        </>
    );
}

export default connect(
    null,
    {}
)(AddSmurfForm);
