import React from 'react';
import styles from './Content.module.css';
import smallArrow from '../../media/icons/smallArrow.svg';
import Burger from '../../media/images/burger.svg';

const Content = () => {
    return (
        <div className={styles.content}>
            <div className={styles.contentTitle}>
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

export default Content;