import React from 'react';
import styles from './Menu.module.css';
import {NavLink} from 'react-router-dom';

const Menu = () => {

    const setActive = ({isActive}) => isActive ? styles.active : "";

    return (
        <div className={styles.menu}>
            <h2>Меню</h2>
            <ul>
                <li><NavLink className={setActive} to="/menu/pizza">Пицца</NavLink></li>
                <li><NavLink className={setActive} to="/menu/burger">Бургер</NavLink></li>
                <li><NavLink className={setActive} to="/sushi">Суши</NavLink></li>
                <li><NavLink className={setActive} to="/rolls">Роллы</NavLink></li>
                <li><NavLink className={setActive} to="/salads">Салаты</NavLink></li>
                <li><NavLink className={setActive} to="/desserts">Десерты</NavLink></li>
                <li><NavLink className={setActive} to="/drinks">Напитки</NavLink></li>
            </ul>
        </div>
    );
};

export default Menu;