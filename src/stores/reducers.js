import {combineReducers} from 'redux';
import photos from "./photos/reducers";

const rootReducer = combineReducers({photos});

export default rootReducer;
