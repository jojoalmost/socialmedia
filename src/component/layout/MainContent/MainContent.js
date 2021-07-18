import React from 'react';
import styles from './MainContent.module.css';

const MainContent = ({children}) => {
    return (
        <div className={styles.container}>{children}</div>
    )
}
export default MainContent;
