import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './NewProducts.module.css';

const NewProducts = () => {
    return (
        <div className={styles.products}>
            <div className={styles.productsTitle}>
                <h2>Новинки</h2>
            </div>
            <ul>
                <li><NavLink>Пицца</NavLink></li>
                <li><NavLink>Бургер</NavLink></li>
                <li><NavLink>Суши</NavLink></li>
                <li><NavLink>Роллы</NavLink></li>
                <li><NavLink>Салаты</NavLink></li>
                <li><NavLink>Десерты</NavLink></li>
                <li><NavLink>Напитки</NavLink></li>
            </ul>
        </div>
    );
};

export default NewProducts;