import React from 'react';
import styles from './NewProducts.module.css';
import {Outlet} from 'react-router-dom';

const NewProducts = () => {
    return (
        <div className={styles.products}>
            <div className={styles.productsTitle}>
                <h2>Новинки</h2>
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

export default NewProducts;