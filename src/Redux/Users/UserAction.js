import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from "./UserTypes";
import axios from "axios"
//Define Actions

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}
export const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}


//thunk => return fnc => arg pass => action dispatch => pass dispatch
export const fetchUsers = () => {
    return async (dispatch) => { 
        dispatch(fetchUsersRequest())
        try {
            const req = await axios.get("https://jsonplaceholder.typicode.com/users")
            let users = req.data;
            dispatch(fetchUsersSuccess(users))
        } catch (error) {
            let errorMsg = error.message
            dispatch(fetchUsersFailure(errorMsg))
        }
    }
}