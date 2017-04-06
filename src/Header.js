import React from 'react';

class Header extends React.Component{
  render(){
    let styles = {
      fontSize: '28px',
      color: '#fff',
      backgroundColor: '#607D8B',
      fontWeight: 'bold',
      padding: '20px 10px'
    }
    return(
      <div style={styles}>
        部门列表
      </div>
    )
  }
}

export default Header;
