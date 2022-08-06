import React from 'react';
import styles from './Menu.module.css';
import {NavLink} from 'react-router-dom';

const Menu = () => {
    return (
        <div className={styles.menu}>
            <div className={styles.menuTitle}>
                <h2>Здесь будет Меню</h2>
            </div>
            {/*<ul>*/}
            {/*    <li><NavLink>Пицца</NavLink></li>*/}
            {/*    <li><NavLink>Бургер</NavLink></li>*/}
            {/*    <li><NavLink>Суши</NavLink></li>*/}
            {/*    <li><NavLink>Роллы</NavLink></li>*/}
            {/*    <li><NavLink>Салаты</NavLink></li>*/}
            {/*    <li><NavLink>Десерты</NavLink></li>*/}
            {/*    <li><NavLink>Напитки</NavLink></li>*/}
            {/*</ul>*/}
        </div>
    );
};

export default Menu;