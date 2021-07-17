import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import api from "../../utils/api";
import UserDetailTabs from "./UserDetailTabs";
import styles from "./UserDetail.module.css"

const UserDetail = () => {
    const [user, setUser] = useState({});
    const {userId} = useParams();

    useEffect(() => {
        api.get(`users/${userId}`).then(res => {
            const {data} = res;
            setUser(data);
        })
    }, [userId])

    const {name, username, email, phone, website} = user;

    return (
        <div className={styles.container}>
            <div>
                <div>{name}</div>
                <div>{username}</div>
                <div>{email}</div>
                <div>{phone}</div>
                <div>{website}</div>
            </div>

            <div>
                <UserDetailTabs userId={userId}/>
            </div>
        </div>
    )
}
export default UserDetail;
