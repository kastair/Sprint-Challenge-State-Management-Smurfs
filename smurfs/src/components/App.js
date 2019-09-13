import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { getSmurf } from '../actions';
import "./App.css";
import AddSmurfForm from "./AddSmurfForm";
import SmurfList from "./SmurfList";

const App =({ getSmurf, isFetching }) => {
  useEffect(() => {
    // run action creator when the component mounts
    getSmurf();
  }, [getSmurf]);

  if (isFetching) {
    return <h2>Fetching a smurf for you!</h2>;
  }
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
      <AddSmurfForm />
      <SmurfList />
    </div>
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
)(App);
