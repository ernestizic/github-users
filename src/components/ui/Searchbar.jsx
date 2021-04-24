import React, {useState} from 'react';
import axios from 'axios';
import UserGrid from '../users/UserGrid';


const Searchbar = (props) => {

    const [users, setUsers] = useState([]);
    const [text, setText] = useState("");
    const [count, setCount] = useState('')

    /*const onChange =(q)=> {
        setText(q)
        axios.get(`https://api.github.com/search/users?q=${q}`)
        .then(res => {
            console.log(res.data)
            setUsers(res.data.items)
            setCount(res.data.total_count)
        })
    }*/

    const handleSubmit =(e)=> {
        e.preventDefault();
        axios.get(`https://api.github.com/search/users?q=${text}`)
        .then(res => {
            console.log(res.data)
            setUsers(res.data.items)
            setCount(res.data.total_count)
        })
    }


    return ( 
        <div>
            <form className="searchbar" onSubmit={handleSubmit}>
                <div className="input-field">
                    <input id="search" type="search" value={text} onChange={(e)=> setText(e.target.value)}/>
                    <label htmlFor="search"> <i className="material-icons">Search user by name</i></label>
                    <i className="material-icons red-text">x</i>
                </div>
            </form>
            <UserGrid users={users} count={count} />
        </div>
        
     );
}
 
export default Searchbar;