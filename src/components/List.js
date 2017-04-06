import React from 'react';
// import Form from './Form';
import axios from 'axios';

class List extends React.Component{
  constructor(){
    super();
    this.state={
      data: [],
      // type 状态用来控制表单具体是新增还是修改，0是新增，其他均为_id
      type: null
    }
  }
  componentDidMount(){
    axios.get('../list.json')
      .then( res => this.setState({data: res.data}) )
      .catch( err => alert(err) )
  }
  render(){
    let styles = {
      maxWidth: '760px',
      margin: '10px auto'
    }
    return(
      <div style={styles}>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>序号</th>
              <th>部门名称</th>
              <th>描述</th>
              <th>父部门</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map( item =>
              <tr key={item.index}>
                <td>{item.index}</td>
                <td>{item.branch}</td>
                <td>{item.describe}</td>
                <td>{item.bigbranch}</td>
                <td>
                  <div className='action'>
                    <button className='btn btn-default'>修改</button>
                    <button className='btn btn-default'>删除</button>
                  </div>
                </td>
              </tr>
             ) }
          </tbody>
        </table>
        {/* <Form ref='form' type={this.state.type} action={this.editPerson.bind(this)}/> */}
      </div>
    )
  }
}

export default List;
