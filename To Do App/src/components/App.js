import React, { Component } from 'react';
import SimpleStorage from "react-simple-storage";
import Header from './header.js';
import Todo from './todo.js';
import Done from './done.js';
import Searchmovie from './searchmovies.js';


class App extends Component {

constructor(props){
  super(props);
  this.state={
    items: [],
    userinput:'',
    done:[],
    themeClass: ''
  }
}

//METHODS

changinginput=(input)=>{
  this.setState({
    userinput: input
  })
};

changeTheme = () => {
  if (this.state.themeClass == 'light') {
     this.setState({
       themeClass: 'dark'
     })
  }
  else {
    this.setState({
      themeClass: 'light'
    })
  }
}

addtolist=(input)=>{
  if (this.state.userinput === '') {
    alert('empty input')
  }
  else{
    var newitems = this.state.items;
    newitems.push(input);
    this.setState({
      items: newitems,
      userinput: ''
  })
 }
}

delete=(indexp)=>{
  var newarray = this.state.items.filter((item, index)=> index !== indexp);
  this.setState({
    items: newarray
    })
  }

deletedone=(indexp)=>{
    var newarray = this.state.done.filter((item, index)=> index !== indexp);
    this.setState({
      done: newarray
    });
  }

addToDone=(e)=>{
  var donelist = this.state.done;
  donelist.push(e)
  this.setState({
     done: donelist
   });
   if (this.state.items.length===1) {
     alert("Good job!", "You clicked the button!", "success");
   }
}

handleKeyPress = (event, ) => {
  if(event.key == 'Enter'){
    this.addtolist(this.state.userinput);
  }
}


  render(){
    return(
      <div id='app' className = {this.state.themeClass}>
    <SimpleStorage parent={this} />
      <div className='container'>
          <Header changeTheme = {this.changeTheme}
                  handleKeyPress = {this.handleKeyPress}
                  addtolist = {this.addtolist}
                  changinginput = {this.changinginput}
                  userinput = {this.state.userinput}/>
          <Todo   items = {this.state.items}
                  deleted = {this.delete}
                  addToDone = {this.addToDone}/>
          <Done  deletedone = {this.deletedone}
                 done = {this.state.done}/>
      </div>
    </div>
    )
  }
}

export default App
