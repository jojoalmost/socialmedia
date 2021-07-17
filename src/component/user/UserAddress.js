import React from 'react';

const UserAddress = ({city, geo: {lat, lng}, street, suite, zipcode}) => {
    return (
        <div>
            <h3>Address</h3>
            <div>{city}</div>
            <div>{lat},{lng}</div>
            <div>{street}</div>
            <div>{suite}</div>
            <div>{zipcode}</div>
        </div>
    )
}
export default UserAddress
