import React from 'react';
import Spinner from '../ui/Spinner';
import UserItem from './UserItem';

const UserGrid = ({users, count}) => {

    let allUsers = users.length ? (
        users.map((user) => (
            <UserItem key={user.id} user={user} />
        ))
        
    ) : (
        <Spinner />
    )
    return ( 
        <div>
            <h5 style={{paddingLeft: 110}}>{count} search result</h5>
            <div className="row user-grid">
                {allUsers}
            </div>
        </div>
        
     );
}
 
export default UserGrid;