import React from 'react';
import UserItem from './UserItem';

const UserGrid = ({users}) => {

    let allUsers = users.length ? (
        users.map((user) => (
            <UserItem key={user.id} user={user} />
        ))
        
    ) : (
        <h3> Loading... </h3>
    )
    return ( 
        <div className="row">
            {allUsers}
        </div>
     );
}
 
export default UserGrid;