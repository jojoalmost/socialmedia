import React from 'react';
import UserAddress from "./UserAddress";
import UserCompany from "./UserCompany";
import styles from "./UserInfo.module.css"

const UserInfo = ({email, phone, website, address, company}) => {
    return (
        <div className={styles.container}>
            <h3>Detail</h3>
            <div><a href={email}>{email}</a></div>
            <div><a href={phone}>{phone}</a></div>
            <div><a href={website}>{website}</a></div>

            <UserAddress {...address}/>
            <UserCompany {...company}/>
        </div>
    )
}
export default UserInfo;
