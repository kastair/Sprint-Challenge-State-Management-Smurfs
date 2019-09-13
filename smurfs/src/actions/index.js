import axios from 'axios';

export const FETCHING_SMURF_START = 'FETCHING_SMURF_START';

export const FETCHING_SMURF_SUCCESS = 'FETCHING_SMURF_SUCCESS';

export const FETCHING_SMURF_FAILURE = 'FETCHING_SMURF_FAILURE';


export const getSmurf = () => dispatch => {
    console.log('hello getSmurf');
    dispatch({ type: FETCHING_SMURF_START });
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            dispatch({ type: FETCHING_SMURF_SUCCESS, payload: res.data });
            console.log(res.data);
        })
        .catch(err => {
            dispatch({
                type: FETCHING_SMURF_FAILURE,
                payload: `${err.response} code: ${err.response.code}`
            });
            console.log(err);
        });
};