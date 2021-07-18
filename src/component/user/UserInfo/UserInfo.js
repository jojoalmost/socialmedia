import React from 'react';
import UserAddress from "../UserAddress/UserAddress";
import UserCompany from "../UserCompany";
import styles from "./UserInfo.module.css"

const UserInfo = ({email, phone, website, address, company}) => {
    return (
        <div className={styles.container}>
            <h3>Detail</h3>
            <div>
                <div>Email</div>
                <div><a href={`mailto:${email}`}>{email}</a></div>
            </div>
            <div>
                <div>Phone</div>
                <a href={`tel:${phone}`}>{phone}</a>
            </div>
            <div>
                <div>Website</div>
                <a href={`https://${website}`}>{website}</a>
            </div>

            <UserAddress {...address}/>
            <UserCompany {...company}/>
        </div>
    )
}
export default UserInfo;
