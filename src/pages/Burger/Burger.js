import React from 'react';
import styles from './Burger.module.css';
import firstBurger from '../../media/images/firstBurger.svg';

const Burger = () => {
    return (
        <div className={styles.burger}>
            <div className={styles.burgerBox}>
                <img src={firstBurger} alt="cheeseburger"/>
                <h3>Чизбургер</h3>
                <p>Булка, котлета,сыр, соленый огурец, лук, помидор,
                    салат айсберг,
                    соус чесночный, соус гриль,
                    кетчуп, майонез</p>
                <p className={styles.price}>200 сом</p>
                <div className={styles.optionBtn}>
                    <button>-</button>
                    <span> 1 </span>
                    <button>+</button>
                </div>
                <div className={styles.btn}>
                    <button>В корзину</button>
                </div>
            </div>
            <div className={styles.burgerBox}>
                <img src="" alt=""/>
                <h3></h3>
                <p></p>
                <p></p>
                <button></button>
                <span></span>
                <button></button>
                <button></button>
            </div>
            <div className={styles.burgerBox}>
                <img src="" alt=""/>
                <h3></h3>
                <p></p>
                <p></p>
                <button></button>
                <span></span>
                <button></button>
                <button></button>
            </div>
            <div className={styles.burgerBox}>
                <img src="" alt=""/>
                <h3></h3>
                <p></p>
                <p></p>
                <button></button>
                <span></span>
                <button></button>
                <button></button>
            </div>
        </div>
    );
};

export default Burger;