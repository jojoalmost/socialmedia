import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import api from "../../utils/api";

import styles from "./UserDetail.module.css"

import UserDetailTabs from "./UserDetailTabs";

import {initStateUserDetails} from "../../utils/defaultState";
import UserDetailTabContent from "./UserDetailTabContent";
import UserInfo from "./UserInfo";

const UserDetail = () => {
    const [user, setUser] = useState(initStateUserDetails);
    const {userId} = useParams();

    useEffect(() => {
        api.get(`users/${userId}`).then(res => {
            const {data} = res;
            setUser(data);
        })
    }, [userId])

    const {name, username} = user;

    return (
        <div>
            <div className={styles.mainDetail}>
                <h2 className={styles.title}>{name}</h2>
                <div>@{username}</div>
            </div>

            <UserDetailTabs userId={userId}>
                <UserInfo {...user} />
                <UserDetailTabContent userId={Number(userId)}/>
            </UserDetailTabs>
        </div>
    )
}
export default UserDetail;
