import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './Header.module.css';
import Logo from '../../media/icons/LOgo.svg';
import Arrow from '../../media/icons/arrow.svg';
import Phone from '../../media/icons/phone.svg';
import Basket from '../../media/icons/basket.svg';

const Header = () => {

    const setActive = ({isActive}) => isActive ? styles.active : "";

    return (
        <div className={styles.header}>
            <img src={Logo} alt="food planet"/>
            <ul>
                <li><NavLink className={setActive} to="/">Главная</NavLink></li>
                <li><NavLink className={setActive} to="/menu">Меню<img src={Arrow} alt=""/></NavLink></li>
                <li><NavLink className={setActive} to="/delivery">Доставка</NavLink></li>
                <li><NavLink className={setActive} to="/contacts">Контакты</NavLink></li>
                <li><NavLink className={setActive} to="/phone"><img src={Phone} alt="phone"/>+996500405988</NavLink></li>
                <li><NavLink className={setActive} to="/basket"><img src={Basket} alt="basket"/>1</NavLink></li>
            </ul>
        </div>
    );
};

export default Header;