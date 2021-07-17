import React from 'react';

const UserAddress = ({city, geo: {lat, lng}, street, suite, zipcode}) => {
    return (
        <div>
            <h3>Address</h3>
            <div>
                <a href={`https://maps.google.com/?q=${lat},${lng}`} target="_blank">
                    <div>{city}, {street}</div>
                    <div>{suite}</div>
                    <div>{zipcode}</div>
                </a>
            </div>
        </div>
    )
}
export default UserAddress
