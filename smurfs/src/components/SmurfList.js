import React from "react";
import { connect } from 'react-redux';
import { getSmurf } from '../actions';
import "./App.css";

const SmurfList = ({smurfs}) => {
    return (
        <>
            <h1>Smurfs</h1>
            {smurfs.map(item => (
                <div>
                    <p>name:{item.name}</p>
                    <p>height:{item.height}</p>
                    <p>age:{item.age}</p>
                </div>
            ))}
        </>
    );
}

const mapStateToProps = state => {
    return {
        ...state
    }
}

export default connect(
    mapStateToProps,
    { getSmurf }
)(SmurfList);