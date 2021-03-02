import React from 'react';
import Spinner from '../ui/Spinner';
import UserItem from './UserItem';

const UserGrid = ({users}) => {

    let allUsers = users.length ? (
        users.map((user) => (
            <UserItem key={user.id} user={user} />
        ))
        
    ) : (
        <Spinner />
    )
    return ( 
        <div className="row user-grid">
            {allUsers}
        </div>
     );
}
 
export default UserGrid;