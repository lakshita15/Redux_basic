import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from "./UserTypes";

const initialState = {
    loading : false,
    users : [],
    error:''
}
const UserReducer=(state = initialState , action)=>{
switch(action.type){
    case FETCH_USERS_REQUEST:
        return {
            ...state, loading:true
        }
        
        case FETCH_USERS_SUCCESS:
            return{

                loading:false,
                error:'',
                users: action.payload
            }
            case FETCH_USERS_FAILURE:
                return{
                    users:[],
                    loading:false,
                    error: action.payload
                }
                default : return state
        }

}

export default UserReducer 