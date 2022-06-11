
const initialstate = {
    numofballs : 20
}
const BUY_BALL = 'BUY_BALL';
//pure fnc 
const ballReducer=(state = initialstate , action)=>{
    switch (action.type) {
        case BUY_BALL:
            
            return{
                ...state,
                numofballs:state.numofballs-1
            }
    
        default:
            return state; // as state me chnge krne ki need ni to as it is isko return krdo
    }
}
export default ballReducer