import React from 'react';
import styles from './Menu.module.css';
import {Outlet} from 'react-router-dom';

const Menu = () => {
    return (
        <div className={styles.menu}>
            <div className={styles.menuTitle}>
                <h2>Меню</h2>
            </div>
            <ul>
                <li><a href="">Пицца</a></li>
                <li><a href="">Бургер</a></li>
                <li><a href="">Суши</a></li>
                <li><a href="">Роллы</a></li>
                <li><a href="">Салаты</a></li>
                <li><a href="">Десерты</a></li>
                <li><a href="">Напитки</a></li>
            </ul>
            <Outlet/>
        </div>
    );
};

export default Menu;