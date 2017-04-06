import React from 'react';

class TableHeader extends React.Component{
  render(){
    let styles = {
      display: 'flex',
    };
    let inputstyles = {
      margin: '10px',
      width: '20%'
    };
    let buttonstyles = {
      margin: '10px'
    };
    let hstyles = {
      padding: '10px'
    };
    let buttonstyles2 = {
      margin: '10px',
      marginLeft: '40%'
    }
    return(
      <div style={styles}>
        <h5 style={hstyles}>部门</h5>
        <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" style={inputstyles}/>
        <button type="button" id="myButton" data-loading-text="查询" className="btn btn-primary" style={buttonstyles}>
          查询
        </button>
        <button type="button" id="myButton" data-loading-text="查询" className="btn btn-primary" style={buttonstyles2}>
          添加部门
        </button>
      </div>
    )
  }
}

export default TableHeader;
