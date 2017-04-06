import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Table from './Table';

class App extends React.Component {
  render () {
    let styles = {
      display: 'flex',
      flexDirection:'column',
    }
    return(
      <div style={styles}>
        <Header />
        <Table />
        <Footer />
      </div>
    )
  }
}

export default App;
