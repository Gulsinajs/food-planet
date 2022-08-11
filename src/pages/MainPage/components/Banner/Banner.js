import React from 'react';
import styles from './Banner.module.css';
import smallArrow from "../../../../media/icons/smallArrow.svg";
import BigBurger from "../../../../media/images/burger.png";

const Banner = () => {
    return (
        <div className={styles.banner}>
                <div className={styles.banner_title}>
                    <h1>Доставка вкусной еды до 30 минут + напиток в подарок!</h1>
                    <p>Доставим заказ вовремя и можете рассчитывать, что еда будет доставлена всегда горячей и
                        ароматной.</p>
                    <button type="submit">Перейти в меню<img src={smallArrow} alt="small arrow"/></button>
                </div>
                <div>
                    <img src={BigBurger} alt="burger"/>
                </div>
        </div>
    );
};

export default Banner;