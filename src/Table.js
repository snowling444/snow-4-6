import React from 'react';

import TableHeader from './components/TableHeader.js';
import List from './components/List.js';

class Table extends React.Component{
  render(){
    let styles = {
      flex:'1 73vh'
    };
    return(
      <div style={styles}>
        <TableHeader />
        <List />
      </div>
    )
  }
}

export default Table;
