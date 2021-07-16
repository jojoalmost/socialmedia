import React from 'react';

const UserAddress = ({address: {city, geo: {lat, lng}, street, suite, zipcode}}) => {
    return (
        <div>
            <div>{city}</div>
            <div>{lat} {lng}</div>
            <div>{street}</div>
            <div>{suite}</div>
            <div>{zipcode}</div>
        </div>
    )
}
export default UserAddress
