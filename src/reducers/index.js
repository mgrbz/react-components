import { combineReducers } from "redux";

import R_User from "./R_User";
import R_Post from "./R_Post";





const rootReducer = combineReducers({
    R_User,
    R_Post
})


export default rootReducer;
