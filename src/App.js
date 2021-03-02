import axios from 'axios';
import React, { Component } from 'react';
import Header from "./components/ui/Header";
import UserGrid from './components/users/UserGrid';

class App extends Component {
  state = { 
    users: []
   }

   componentDidMount() {
     axios.get('https://api.github.com/users')
      .then(res => 
        //console.log(res.data))
        this.setState({users: res.data.slice(0, 10)}))
   }

  render() { 
    return ( 
      <div className="App container-fluid">
        <Header />
        <UserGrid users={this.state.users} />
      </div>
     );
  }
}
 
export default App;
