import React from 'react';
import styles from './UserCard.module.css'
import {useHistory} from "react-router";

const UserCard = ({user: {id, email, name, username, phone, website, address, company}, user}) => {
    let history = useHistory();

    const handleClickCard = () => {
        history.push(`/users/${id}`)
    }

    return (
        <div className={styles.container} onClick={handleClickCard}>
            <div>{name}</div>
            <div>{username}</div>
        </div>
    )
}
export default UserCard
