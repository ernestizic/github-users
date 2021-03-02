import axios from 'axios';
import React, { Component } from 'react';
import Header from "./components/ui/Header";
import UserGrid from './components/users/UserGrid';
import Searchbar from './components/ui/Searchbar';

class App extends Component {
  state = { 
    users: [],
    searchText: ""
   }

   componentDidMount() {
     axios.get(`https://api.github.com/users`)
      .then(res => 
        //console.log(res.data))
        this.setState({users: res.data}))
   }


  render() { 
    const filteredUsers = this.state.users.filter(user => (
        user.login.toLowerCase().includes(this.state.searchText.toLowerCase())
    ))
    return ( 
      <div className="App container-fluid">
        <Header />
        <Searchbar onChange={(e)=> this.setState({ searchText: e.target.value })} />
        <UserGrid users={filteredUsers} />
      </div>
     );
  }
}
 
export default App;
