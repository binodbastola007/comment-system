import { combineReducers } from "redux";
import authReducer from "./authreducer/authReducer";

const rootReducer = combineReducers({ credentials: authReducer });

export default rootReducer;