import React from 'react';
import styles from './UserCard.module.css'
import {useHistory} from "react-router";

const UserCard = ({id, email, name, username, phone, website, address, company}) => {
    const history = useHistory();

    const handleClickCard = () => {
        history.push(`/user/${id}`)
    }

    return (
        <div className={styles.container} onClick={handleClickCard}>
            <div>{name}</div>
            <div>@{username}</div>
        </div>
    )
}
export default UserCard;
