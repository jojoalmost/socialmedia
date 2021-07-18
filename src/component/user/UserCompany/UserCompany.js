import React from 'react';

const UserCompany = ({bs, catchPhrase, name}) => {
    return (
        <div>
            <h3>Company</h3>
            <div>{name}</div>
            <div>{bs}</div>
            <div>{catchPhrase}</div>
        </div>
    )
}
export default UserCompany
