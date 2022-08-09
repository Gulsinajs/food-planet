import React, {useState} from 'react';
import styles from './Burger.module.css';
import {burgers} from '../../../../constants';

const Burger = () => {

    const [count, setCount] = useState(0);

    function decrementCount() {
        setCount(count - 1);
    }
    function incrementCount() {
        setCount(count + 1);
    }

    const burgersArray = burgers.map(item => (
            <div className={styles.burgerBox}>
                <img src={item.image} alt="cheeseburger"/>
                <h3>{item.title}</h3>
                <p>{item.subTitle}</p>
                <h3>{item.price} сом</h3>
                <div className={styles.burgerBtn}>
                    <button onClick={decrementCount}>-</button>
                    <span> {count} </span>
                    <button onClick={incrementCount}>+</button>
                </div>
                <div className={styles.redBtn}>
                    <button type="submit">В корзину</button>
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