import React, { useState } from 'react';
import { connect } from 'react-redux';
import { buybat , sellBat} from '../Redux/Bats/Batactions'
function BatContainer(props) {
    console.log(props);
    // number state 
    const [ number , setNumber] = useState(0);
    return (  
        <div>
            <h2>Number of bats- {props.numofbbats}</h2>
           <input type='number' value ={number} onChange={e=> setNumber(e.target.value)}></input>
           <button onClick={()=>{props.buybat(number)}}>Buy{number} bats</button>
           <button onClick={()=>{props.sellBat(number)}}>Sell {number} Bat</button>
        </div>
    );
}

const mapStateToProps =(state)=>{
    console.log(state);
    return{
        numofbbats : state.bat.numofbbats
    }
} 
const mapDispatchToProps =(dispatch)=>{
    return{
        buybat: (number)=>dispatch(buybat(number))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(BatContainer);