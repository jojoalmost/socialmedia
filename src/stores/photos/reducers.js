import {combineReducers} from 'redux';
import photosActionType from "./types";

const initialState = {
    modal: {
        albumId: undefined,
        id: undefined,
        title: "",
        url: "",
        thumbnailUrl: "",
    },
    photos: [],
}
const modal = (state = initialState.modal, {type, payload}) => {
    switch (type) {
        case photosActionType.SET_MODAL_PHOTO:
            return payload;
        default:
            return state;
    }
}

const reducer = combineReducers({
    modal,
});

export default reducer;



