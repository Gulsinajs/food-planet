import React from 'react';
import styles from './Burger.module.css';
import {burgers} from '../../constants';

const Burger = () => {

    const burgersArray = burgers.map(item => (
            <div className={styles.burgerBox}>
                <img src={item.image} alt="cheeseburger"/>
                <h3>{item.title}</h3>
                <p>{item.subTitle}</p>
                <p className={styles.price}>{item.price}</p>
                <div className={styles.optionBtn}>
                    <button>&mdash;</button>
                    <span> 1 </span>
                    <button>+</button>
                </div>
                <div className={styles.btn}>
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