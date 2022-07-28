import React from 'react';
import styles from './Footer.module.css';
import LogoLight from '../../media/icons/LOgoLight.svg';
import PhoneLight from '../../media/icons/phoneLight.svg';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <img src={LogoLight} alt=""/>
            <ul>
                <li><a href="">Главная</a></li>
                <li><a href="">Меню</a></li>
                <li><a href="">Доставка</a></li>
                <li><a href="">Контакты</a></li>
                <li><a href=""><img src={PhoneLight} alt=""/>+996500405988</a></li>
            </ul>
        </div>
    );
};

export default Footer;