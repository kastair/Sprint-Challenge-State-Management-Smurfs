import { FETCHING_SMURF_START, FETCHING_SMURF_SUCCESS } from '../actions';

const initialState = {
    smurfs: {
        name: '',
        age: 0,
        height: '',
        id: 0
    },
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
                dog: action.payload,
                isFetching: false
            }
        // case ADD_ITEM:
        //     console.log('made it here!')
        //     let features = state.car.features;
        //     features.push(action.payload);
        //     return {
        //         ...state,
        //         additionalPrice: (state.additionalPrice += action.payload.price),
        //         car: { ...state.car, features },
        //         store: state.store.filter(item => item.id !== action.payload.id)
        //     }
        default:
            return state;
    }
};