import React, {useEffect, useState} from 'react';
import api from "../../utils/api";
import UserCard from "./UserCard";
import styles from "./UserList.module.css"

const UserList = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        api.get('users').then(res => {
            const {data} = res;
            setUsers(data);
        })
    }, [])
    return (
        <div className={styles.container}>
            {users.map(user => (
                <UserCard user={user}/>
            ))}
        </div>
    )
}
export default UserList;
