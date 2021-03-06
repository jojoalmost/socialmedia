import React from 'react';
import styles from './Header.module.css';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Link to={"/"}>
                    <img
                        src="https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_320/v1606836797/szedbshhhmsmebk6cs5y.png"
                        alt="" className={styles.logo}/>
                </Link>
            </div>
        </div>
    )
}
export default Header;
