import { Button } from '@material-ui/core';
import React from 'react'
import {connect} from 'react-redux'
const Filteredlinks = (props) => {
    return (
        <div >
            <Button variant="contained"
              color="primary"
              style={{textDecoration:'none', color:'white',margin: "25px 5px 20px 10px"}}
       onClick={(e) => {
         e.preventDefault();
         props.onClickShowAll(props.filter);
       }}
    >
      {props.children}
    </Button>
           
        </div>
    )
}

const mapStateToProps = state => {
    // console.log(state.reducer)
    return{
      crt: state.reducer 
    };
}
const mapDispatchToProps = dispatch=>{
    return{
      onClickShowAll: (filter)=> dispatch({type: 'SET_VISIBILITY_FILTER',filter})
      
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Filteredlinks);
