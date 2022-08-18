import React from 'react';
import styles from './Admin.module.css';
import SideBar from "./SideBar/SideBar";
import Reviews from "./Reviews/Reviews";

const Admin = () => {
    return (
        <div className={styles.admin}>
            <div className={styles.panelLeft}>
                <SideBar/>
            </div>
            <div className={styles.panelRight}>
                {/*<Reviews/>*/}
            </div>
        </div>
    );
};

export default Admin;