import React, {useEffect, useState} from "react";
import {NavLink, Outlet} from "react-router-dom";
import {useParams} from "react-router-dom";
import styles from "./MainPage.module.css";
import smallArrow from "../../../media/icons/smallArrow.svg";
import Burger from "../../../media/images/burger.png";
import {about, burgers, pizzas} from "../../../constants";
import Pen from "../../../media/icons/pen.svg";
import Pen2 from "../../../media/icons/pen2.svg";
import FeedBack from "./Feedback/FeedBack";
import NewProducts from "./NewProducts/NewProducts";

const MainPage = () => {

    const setActive = ({isActive}) => isActive ? styles.active : "";

    const burgersArray = burgers.map(item => (
            <div className={styles.burgerBox}>
                <img src={item.image} alt="cheeseburger"/>
                <h3>{item.title}</h3>
                <p>{item.subTitle}</p>
                <h3>{item.price} сом</h3>
                <div className={styles.burgerBtn}>
                    <button>&mdash;</button>
                    <span> 1 </span>
                    <button>+</button>
                </div>
                <div className={styles.redBtn}>
                    <button>В корзину</button>
                </div>
            </div>
        )
    );

    const pizzasArray = pizzas.map(item => (
            <div className={styles.pizzaBox}>
                <img src={item.image} alt=""/>
                <h3>{item.title}</h3>
                <p>{item.subTitle}</p>
                <p className={styles.price}>{item.price}<span> сом</span></p>
                <div className={styles.pizzaBtn}>
                    <button>&mdash;</button>
                    <span> 1 </span>
                    <button>+</button>
                </div>
                <div className={styles.blueBtn}>
                    <button>В корзину</button>
                </div>
            </div>
        )
    );

    const aboutArray = about.map(item => (
            <div className={styles.aboutBox}>
                <img src={item.image} alt="delivery"/>
                <h3>{item.title}</h3>
                <p>{item.subTitle}</p>
            </div>
        )
    );

    return (
        <div className={styles.mainPage}>
            <div className={styles.mainPage_flex}>
                <div className={styles.mainTitle}>
                    <h1>Доставка вкусной еды до 30 минут + напиток в подарок!</h1>
                    <p>Доставим заказ вовремя и можете рассчитывать, что еда будет доставлена всегда горячей и
                        ароматной.</p>
                    <button>Перейти в меню<img src={smallArrow} alt="small arrow"/></button>
                </div>
                <div>
                    <img src={Burger} alt="burger"/>
                </div>
            </div>
            <NewProducts/>
            <div className={styles.burger}>
                {burgersArray}
            </div>
            <div className={styles.menu}>
                <h2>Меню</h2>
                <ul>
                    <li><NavLink className={setActive} to="/MainPage/components/pizza">Пицца</NavLink></li>
                    <li><NavLink className={setActive} to="/MainPage/components/burger">Бургер</NavLink></li>
                    <li><NavLink className={setActive} to="/sushi">Суши</NavLink></li>
                    <li><NavLink className={setActive} to="/rolls">Роллы</NavLink></li>
                    <li><NavLink className={setActive} to="/salads">Салаты</NavLink></li>
                    <li><NavLink className={setActive} to="/desserts">Десерты</NavLink></li>
                    <li><NavLink className={setActive} to="/drinks">Напитки</NavLink></li>
                </ul>
                <Outlet/>
            </div>
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
            <div className={styles.about}>
                <h2>Почему выбирают нас:</h2>
                <div className={styles.aboutFlex}>
                    {aboutArray}
                </div>
            </div>
            <FeedBack/>
        </div>
    );
};

export default MainPage;