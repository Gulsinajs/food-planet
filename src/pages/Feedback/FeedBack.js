import React from 'react';
import styles from './FeedBack.module.css';
import Pen from '../../media/icons/pen.svg';
import Pen2 from '../../media/icons/pen2.svg';
import {feedBack} from "../../constants";

const FeedBack = () => {

    const feedBackArray = feedBack.map(item => (
            <div className={styles.feedBackBox}>
                <img className={styles.absolute} src={Pen} alt="/"/>
                <img className={styles.avatar} src={item.image} alt="avatar"/>
                <div className={styles.feedBackUser}>
                    <span>{item.userName}</span>
                    <img src={Pen2} alt="/"/>
                </div>
                <p className={styles.desc}>{item.commit}</p>
                <p>{item.date}</p>
            </div>
        )
    );
    return (
        <div className={styles.feedBack}>
            {feedBackArray}
        </div>
    );
};

export default FeedBack;