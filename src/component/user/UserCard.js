import React from 'react';
import styles from './UserCard.module.css'

const UserCard = ({user: {id, email, name, username, phone, website, address, company}, user}) => {
    return (
        <div className={styles.container}>
            <p>{name}</p>
            <p>{username}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{website}</p>
        </div>
    )
}
export default UserCard
