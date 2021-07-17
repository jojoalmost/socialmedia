import React from 'react';
import styles from './UserDetailTabs.module.css'
import {NavLink} from "react-router-dom";

const UserDetailTabs = ({userId, children}) => {
    return (
        <>
            <div className={styles.tabMenuContainer}>
                <ul>
                    <li>
                        <NavLink to={`/user/${userId}`}>Post</NavLink>
                    </li>
                    <li>
                        <NavLink to={`/user/${userId}/albums`}>Albums</NavLink>
                    </li>
                </ul>
            </div>

            <div className={styles.tabContent}>
                {children}
            </div>
        </>
    )
}
export default UserDetailTabs;
