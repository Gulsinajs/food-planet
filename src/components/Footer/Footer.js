import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './Footer.module.css';
import LogoLight from '../../media/icons/LOgoLight.svg';
import PhoneLight from '../../media/icons/phoneLight.svg';

const Footer = () => {

    const setActive = ({isActive}) => isActive ? styles.active : "";

    return (
        <div className={styles.footer}>
            <img src={LogoLight} alt=""/>
            <ul>
                <li><NavLink className={setActive} to="/">Главная</NavLink></li>
                <li><NavLink className={setActive} to="/menu">Меню</NavLink></li>
                <li><NavLink className={setActive} to="/delivery">Доставка</NavLink></li>
                <li><NavLink className={setActive} to="/contacts">Контакты</NavLink></li>
                <li><NavLink className={setActive} to="/phone"><img src={PhoneLight} alt=""/>+996500405988</NavLink></li>
            </ul>
        </div>
    );
};

export default Footer;