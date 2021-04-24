import React from 'react';
import UserItem from './UserItem';

const UserGrid = ({users, count, loading}) => {

    let allUsers = users.length ? (
        users.map((user) => (
            <UserItem key={user.id} user={user} />
        ))
        
    ) : (
        <div className="empty"><p>Nothing to see here. <b>Search for users to see result</b></p></div>
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