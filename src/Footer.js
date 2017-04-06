import React from 'react';

class Footer extends React.Component{
  render(){
    let styles = {
      fontSize: '18px',
      color: '#fff',
      backgroundColor: '#607D8B',
      fontWeight: 'bold',
      padding: '20px 10px',
      marginTop: '30px',
      textAlign: 'right'
    }
    return(
      <div style={styles}>
        XX公司
      </div>
    )
  }
}

export default Footer;
