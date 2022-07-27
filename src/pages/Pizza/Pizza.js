import React from 'react';
import styles from './Pizza.module.css';
import {pizzas} from "../../constants";

const Pizza = () => {

    const pizzasArray = pizzas.map(item => (
            <div className={styles.pizzaBox}>
                <img src={item.image} alt=""/>
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
        <div className={styles.pizza}>
            <div className={styles.sideBar}>
                <span>Сортировать  по:</span>
                <select name="select" id="">
                    <option value="0">По умолчанию</option>
                    <option value="1">Куриная</option>
                    <option value="2">Мясная</option>
                    <option value="3">Вегетарианская</option>
                </select>
            </div>
            <div className={styles.pizzaFlex}>
                {pizzasArray}
            </div>
            <div className={styles.showBtn}>
                <button>Показать еще</button>
            </div>
        </div>
    );
};

export default Pizza;