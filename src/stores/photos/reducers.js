import {combineReducers} from 'redux';

const initialState = {
    photoModal: {},
    photos: [],
}
const photoModal = (state = initialState.photoModal, {type, payload}) => {
    console.log(type);
    // switch (type) {
    //
    // }
    return state;
}

const photoReducer = combineReducers({
    photoModal,
});

export default photoReducer;



