import React, { Component } from 'react';



class Todo extends Component {

constructor(props){
  super(props);
}
  render(){
    const {items, deleted, addToDone} = this.props;
    return(
      <ul>
        <h1 className = 'todo'>TO DO</h1>
        {items.map((item, index)=><li className = 'nie' onClick={(e)=>deleted(index)} key={index}>{item} <br/> <button className='tak' onClick={(e)=>addToDone(item)}> MOVE TO DONE</button> </li>)}
      </ul>
    )
  }
}


export default Todo
