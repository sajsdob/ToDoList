import React, { Component } from 'react';


class Searchmovie extends Component {

constructor(props){
  super(props);
  this.state = {
    title: 'love',
    year: 1999,
    results: []
  }
}

showResult = () => {
        fetch(`http://www.omdbapi.com/?s=${this.state.title}&y=${this.state.year}&apikey=10ce34c2`)
       .then(res => res.json())
       .then(data => this.setState({results: data.search}))
  }

updateTitle = (e) => {
  this.setState({
    title: e
  })
}

  render(){
    return(
      <div className = 'userinput'>
        <div className = 'changeTheme' onClick={this.props.changeTheme}>CHANGE THEME</div>
        <input  onKeyPress={this.handleKeyPress} placeholder='SEARCH FOR MOVIE' onChange={(e)=>this.updateTitle(e.target.value)}  type='text'></input>
        <div className = 'addbutton' onClick={()=>this.props.addtolist(this.props.userinput)}>ADD</div>
        <button onClick = {this.showResult}>show </button>
      </div>
    )
  }
}



export default Searchmovie
