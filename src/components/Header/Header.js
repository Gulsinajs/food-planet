import React from 'react';
import styles from './Header.module.css';
import Logo from '../../media/icons/LOgo.svg';
import Arrow from '../../media/icons/arrow.svg';
import Phone from '../../media/icons/phone.svg';
import Basket from '../../media/icons/basket.svg';

const Header = () => {

    return (
        <div className={styles.header}>
            <img src={Logo} alt="food planet"/>
            <ul>
                <li><a className={styles.link} href="/">Главная</a></li>
                <li><a href="/menu">Меню<img src={Arrow} alt="arrow"/></a></li>
                <li><a href="">Доставка</a></li>
                <li><a href="">Контакты</a></li>
                <li><a href=""><img src={Phone} alt="phone"/>+996500405988</a></li>
                <li><a className={styles.link} href="#"><img src={Basket} alt="basket"/>1</a></li>
            </ul>
        </div>
    );
};

export default Header;