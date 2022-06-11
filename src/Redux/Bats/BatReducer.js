
const batstate = {
    numofbbats : 30
}
const BUY_BAT = 'BUY_BAT';
//pure fnc 
const batReducer=(state = batstate , action)=>{
    switch (action.type) {
        case BUY_BAT:
            
            return{
                ...state,
                numofbbats:state.numofbbats-1
            }
    
        default:
            return state; // as state me chnge krne ki need ni to as it is isko return krdo
    }
}
export default batReducer;