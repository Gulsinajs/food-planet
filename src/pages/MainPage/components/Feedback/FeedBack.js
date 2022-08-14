import React, {useEffect, useState} from 'react';
import styles from './FeedBack.module.css';
import Pen from '../../../../media/icons/pen.svg';
import Pen2 from '../../../../media/icons/pen2.svg';
import {useParams} from "react-router-dom";

const FeedBack = () => {

    const params = useParams();
    const [feedBacks, setFeedBacks] = useState([]);

    useEffect(() => {
        fetch(' http://localhost:3001/feedBacks')
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    alert('Error. Status:' + response.status);
                }
            })
            .then(data => setFeedBacks(data))
    }, [])

    // const feedBackArray = feedBack.map(item => (
    //         <div className={styles.feedBackBox}>
    //             <img className={styles.absolute} src={Pen} alt="/"/>
    //             <img className={styles.avatar} src={item.image} alt="avatar"/>
    //             <div className={styles.feedBackUser}>
    //                 <span>{item.userName}</span>
    //                 <img src={Pen2} alt="/"/>
    //             </div>
    //             <p className={styles.desc}>{item.commit}</p>
    //             <p>{item.date}</p>
    //         </div>
    //     )
    // );
    return (
        <div className={styles.feedBack}>
            <h2>Отзывы</h2>
            <div className={styles.feedBackFlex}>
                {
                    feedBacks.map(item => {
                        return <div className={styles.feedBackBox}>
                            <img className={styles.absolute} src={Pen} alt="/"/>
                            <img className={styles.avatar} src={item.image} alt="avatar"/>
                            <div className={styles.feedBackUser}>
                                <p>{item.userName}</p>
                                <img src={Pen2} alt="/"/>
                            </div>
                            <p className={styles.desc}>{item.commit}</p>
                            <p>{item.date}</p>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default FeedBack;