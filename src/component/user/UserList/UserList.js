import React, {useEffect, useState} from 'react';
import api from "../../../utils/api";
import UserCard from "../UserCard/UserCard";
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
            <h2>Users ({users.length})</h2>
            <div>
                {users.map(user => (
                    <UserCard key={user.id} {...user}/>
                ))}
            </div>
        </div>
    )
}
export default UserList;
