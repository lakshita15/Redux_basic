import React from 'react';
import { connect } from 'react-redux';
import { buybat } from '../Redux/bats/Batactions';

function BatContainer(props) {
    console.log(props);
    return (  
        <div>
            <h2>Number of bats- {props.numofbbats}</h2>
            <button onClick={props.buybat}>Buy bats</button>
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
        buybat: ()=>dispatch(buybat())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(BatContainer);