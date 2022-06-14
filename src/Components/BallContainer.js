import React from 'react'
import { buyball } from '../Redux/balls/Ballactions';
import {connect} from 'react-redux'
function BallContainer(props) {
    console.log('ball render' , props); 
    return (
        <div>
            <h2>Number of Balls- {props.numofballs}</h2>
            <button onClick={props.buyball}>Buy Balls</button>
        </div>
    )
}
//first method for reading from global state
const mapStateToProps = state=>{
   
    return{
        numofballs:state.ball.numofballs
    }
}
const mapDispatchToProps = dispatch=>{
    return{
        buyball: ()=>dispatch(buyball())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BallContainer)