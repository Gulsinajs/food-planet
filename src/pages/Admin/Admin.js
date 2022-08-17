import React from 'react';
import styles from './Admin.module.css';
import SideBar from "./SideBar/SideBar";

const Admin = () => {
    return (
        <div className={styles.admin}>
            <div className={styles.panelLeft}>
                <SideBar/>
            </div>
            <div className={styles.panelRight}>
                <h1>Hello</h1>
            </div>
        </div>
    );
};

export default Admin;