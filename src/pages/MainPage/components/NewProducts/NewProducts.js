import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './NewProducts.module.css';

const NewProducts = () => {

    const setActive = ({isActive}) => isActive ? styles.active : "";

    return (
        <div className={styles.products}>
            <h2>Новинки</h2>
            <ul>
                <li><NavLink className={setActive} to="/mainPage/components/pizza">Пицца</NavLink></li>
                <li><NavLink className={setActive} to="/mainPage/components/burger">Бургер</NavLink></li>
                <li><NavLink className={setActive} to="/sushi">Суши</NavLink></li>
                <li><NavLink className={setActive} to="/rolls">Роллы</NavLink></li>
                <li><NavLink className={setActive} to="/salads">Салаты</NavLink></li>
                <li><NavLink className={setActive} to="/desserts">Десерты</NavLink></li>
                <li><NavLink className={setActive} to="/drinks">Напитки</NavLink></li>
            </ul>
        </div>
    );
};

export default NewProducts;