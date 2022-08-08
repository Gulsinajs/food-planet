import React from 'react';
import styles from './Burger.module.css';
import {burgers} from '../../../../constants';

const Burger = () => {

    const burgersArray = burgers.map(item => (
            <div className={styles.burgerBox}>
                <img src={item.image} alt="cheeseburger"/>
                <h3>{item.title}</h3>
                <p>{item.subTitle}</p>
                <h3>{item.price} сом</h3>
                <div className={styles.burgerBtn}>
                    <button>-</button>
                    <span> 1 </span>
                    <button>+</button>
                </div>
                <div className={styles.redBtn}>
                    <button>В корзину</button>
                </div>
            </div>
        )
    );

    return (
        <div className={styles.burger}>
            {burgersArray}
        </div>
    );
};

export default Burger;