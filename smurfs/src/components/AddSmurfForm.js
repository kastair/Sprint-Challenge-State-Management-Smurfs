import React, { useState } from "react";
import { connect } from 'react-redux';
import { postSmurfData } from '../actions';
import "./App.css";

const AddSmurfForm = ({ postSmurfData }) => {
    const [inputNameValue, setNameInputValue] = useState("");
    const [inputAgeValue, setAgeInputValue] = useState("");
    const [inputHeightValue, setHeightInputValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        postSmurfData(inputNameValue, inputAgeValue, inputHeightValue)
        console.log(inputNameValue, inputAgeValue, inputHeightValue);
    }

    const changeNameHandler = e => {
        setNameInputValue(e.target.value);
        console.log(inputNameValue);
    };

    const changeAgeHandler = e => {
        setAgeInputValue(e.target.value);
        console.log(inputAgeValue);
    };

    const changeHeightHandler = e => {
        setHeightInputValue(e.target.value);
        console.log(inputHeightValue);
    };
    return (
        <>
            <form onSubmit={e => handleSubmit(e)}>
                <p>Enter smurf name:</p>
                <input
                    type='text'
                    name='name'
                    onChange={changeNameHandler}
                />
                <p>Enter smurf age:</p>
                <input
                    type='text'
                    name='age'
                    onChange={changeAgeHandler}
                />
                <p>Enter smurf height:</p>
                <input
                    type='text'
                    name='height'
                    onChange={changeHeightHandler}
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
    { postSmurfData }
)(AddSmurfForm);
