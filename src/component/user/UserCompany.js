import React from 'react';

const UserCompany = ({company: {bs, catchPhrase, name}}) => {
    return (
        <div>
            <div>{bs}</div>
            <div>{catchPhrase}</div>
            <div>{name}</div>
        </div>
    )
}
export default UserCompany
