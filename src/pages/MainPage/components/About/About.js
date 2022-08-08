import React from 'react';
import styles from './About.module.css';
import {about} from '../../../../constants';

const About = () => {

    const aboutArray = about.map(item => (
            <div className={styles.aboutBox}>
                <img src={item.image} alt="delivery"/>
                <h3>{item.title}</h3>
                <p>{item.subTitle}</p>
            </div>
        )
    );

    return (
        <div className={styles.about}>
            <h2>Почему выбирают нас:</h2>
            <div className={styles.aboutFlex}>
                {aboutArray}
            </div>
        </div>
    );
};

export default About;