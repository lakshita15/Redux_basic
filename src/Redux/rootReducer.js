import { combineReducers } from "redux";
import ballReducer from "./balls/BallReducer";
import batReducer from "./Bats/BatReducer";
import UserReducer from "./Users/UserReducer";
const rootReducer = combineReducers({
    ball: ballReducer,
    bat: batReducer,
    user : UserReducer

})
export default rootReducer; 