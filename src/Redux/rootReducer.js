import { combineReducers } from "redux";
import ballReducer from "./balls/BallReducer";
import batReducer from "./bats/BatReducer";

const rootReducer = combineReducers({
    ball:ballReducer,
    bat:batReducer

})
export default rootReducer;