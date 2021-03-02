import React, { Component } from 'react';

class Searchbar extends Component {
     
    render() { 
        return ( 
            <form className="searchbar">
                <div className="input-field">
                    <input id="search" type="search" value={this.props.searchText} onChange={this.props.onChange}/>
                    <label htmlFor="search"> <i className="material-icons">Search</i></label>
                    <i className="material-icons red-text">x</i>
                </div>
            </form>
         );
    }
}
 
export default Searchbar;