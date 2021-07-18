import {combineReducers} from 'redux';
import photoReducer from "./photos/reducers";

const rootReducer = combineReducers({photoReducer});

export default rootReducer;
