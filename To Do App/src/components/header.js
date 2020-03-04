import React, { Component } from 'react';


class Header extends Component {

constructor(props){
  super(props);
}
  render(){
    const {changeTheme, handleKeyPress, addtolist, changinginput, userinput} = this.props;
    return(
      <div  className = 'userinput'>
        <div    className = 'changeTheme'
                onClick={changeTheme}>CHANGE THEME</div>
        <input  onKeyPress={handleKeyPress}
                placeholder='ENTER TASK'
                onChange={(e)=>changinginput(e.target.value)}
                value={userinput}
                type='text'></input>
        <div    className = 'addbutton'
                onClick={()=>addtolist(userinput)}>ADD</div>
      </div>
    )
  }
}



export default Header
