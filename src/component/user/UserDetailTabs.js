import React from 'react';
import styles from './UserDetailTabs.module.css'
import {NavLink} from "react-router-dom";

const UserDetailTabs = ({userId, children}) => {
    return (
        <>
            <div className={styles.tabMenuContainer}>
                <ul>
                    <li>
                        <NavLink exact  to={`/user/${userId}`} activeClassName={styles.activeTab}>Post</NavLink>
                    </li>
                    <li>
                        <NavLink exact  to={`/user/${userId}/albums`} activeClassName={styles.activeTab}>Albums</NavLink>
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
