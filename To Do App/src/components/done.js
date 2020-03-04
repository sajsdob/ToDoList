import React, { Component } from 'react';




class Done extends Component {

constructor(props){
  super(props);
}

  render(){
    const {done,deletedone} = this.props;
    return(
      <ul>
        <h1 className = 'done'>DONE</h1>
        {done.map((item, index)=><li onClick={(e)=>deletedone(index)}  key={index}>{item}    <span>✔</span></li>)}
      </ul>
    )
  }
}



export default Done
