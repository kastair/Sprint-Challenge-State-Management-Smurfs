import { FETCHING_SMURF_START, FETCHING_SMURF_SUCCESS } from '../actions';

const initialState = {
    smurfs: [{
        name: '',
        age: 0,
        height: '',
        id: 0
    }],
    isFetching: false,
    err: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_SMURF_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case FETCHING_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false
            }
        default:
            return state;
    }
};