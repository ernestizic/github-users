import React from 'react';

const Searchbar = (props) => {
    return ( 
        <form className="searchbar">
            <div className="input-field">
                <input id="search" type="search" value={props.searchText} onChange={props.onChange}/>
                <label htmlFor="search"> <i className="material-icons">Search</i></label>
                <i className="material-icons red-text">x</i>
            </div>
        </form>
     );
}
 
export default Searchbar;