import React from 'react';
import styles from './Main.module.css';
import smallArrow from "../../media/icons/smallArrow.svg";
import Burger from "../../media/images/burger.svg";

const Main = () => {
    return (
        <div className={styles.main}>
            <div className={styles.mainTitle}>
                <h1>Доставка вкусной еды до 30 минут + напиток в подарок!</h1>
                <p>Доставим заказ вовремя и можете рассчитывать, что еда будет доставлена всегда горячей и ароматной.</p>
                <button>Перейти в меню<img src={smallArrow} alt="small arrow"/></button>
            </div>
            <div>
                <img src={Burger} alt="burger"/>
            </div>
        </div>
    );
};

export default Main;

