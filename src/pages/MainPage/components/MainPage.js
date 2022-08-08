import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import styles from "./MainPage.module.css";
import smallArrow from "../../../media/icons/smallArrow.svg";
import BigBurger from "../../../media/images/burger.png";
import FeedBack from "./Feedback/FeedBack";
import NewProducts from "./NewProducts/NewProducts";
import Menu from "./Menu/Menu";
import Burger from "./Burger/Burger";
import Pizza from "./Pizza/Pizza";
import About from "./About/About";

const MainPage = () => {

    return (
        <div className={styles.mainPage}>
            <div className={styles.mainPage_flex}>
                <div className={styles.mainTitle}>
                    <h1>Доставка вкусной еды до 30 минут + напиток в подарок!</h1>
                    <p>Доставим заказ вовремя и можете рассчитывать, что еда будет доставлена всегда горячей и
                        ароматной.</p>
                    <button type="submit">Перейти в меню<img src={smallArrow} alt="small arrow"/></button>
                </div>
                <div>
                    <img src={BigBurger} alt="burger"/>
                </div>
            </div>
            <NewProducts/>
            <Burger/>
            <Menu/>
            <Pizza/>
            <About/>
            <FeedBack/>
        </div>
    );
};

export default MainPage;