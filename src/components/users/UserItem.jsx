import React from 'react';
//import {Link} from 'react-router-dom';

const UserItem = ({user}) => {
    return ( 
        <div className="col s3 user">
            <div className="card">
                <div className="card-image">
                    <img src={user.avatar_url} alt="github user" />
                    <span className="card-title"><b> {user.login} </b></span>
                </div>
                <div className="card-content">
                    <p>Use the link below to navigate to user's github profile</p>
                </div>
                <div className="card-action">
                    <a href={user.html_url}>View profile</a>
                </div>
            </div>
        </div>
     );
}
 
export default UserItem;
//html_url for the link to each github profile
//login for their name