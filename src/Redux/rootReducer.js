import { combineReducers } from "redux";
import ballReducer from "./balls/BallReducer";
import batReducer from "./Bats/BatReducer";
const rootReducer = combineReducers({
    ball:ballReducer,
    bat:batReducer

})
export default rootReducer;