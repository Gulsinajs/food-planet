import React from 'react';
import {Link} from "react-router-dom";
import styles from "./Checkout.module.css";

const Checkout = () => {

    return (
        <div className={styles.checkout}>
            <div className={styles.checkout_title}>
                <h1>Оформление заказа</h1>
                <h2>Ваши контактные данные</h2>
            </div>
            <form id="checkout_form" className={styles.checkout_form} action="#">
                <div>
                    <label htmlFor="surname"></label>
                    <input id="surname" type="text" name="surname" placeholder="Фамилия"/>
                </div>
                <div>
                    <label htmlFor="name"></label>
                    <input id="name" type="text" name="name" placeholder="Имя"/>
                </div>
                <div>
                    <label htmlFor="address"></label>
                    <input id="address" type="text" name="address" placeholder="Адрес доставки"/>
                </div>
                <div>
                    <label htmlFor="phone"></label>
                    <input id="phone" type="phone" name="phone" placeholder="+996 555 555555"/>
                </div>
                <div>
                    <label htmlFor="payment">Способ оплаты: </label>
                    <select id="payment" name="payment">
                        <option value="0" selected>Оплата наличными</option>
                        <option value="1">M банк</option>
                        <option value="2">Оплата картой</option>
                    </select>
                </div>
            </form>
            <div className={styles.order}>
                <h2>Ваш заказ</h2>
            </div>

            <div className={styles.checkout_order}>
                <hr/>
                <div className={styles.order_sum}>
                    <p>Все блюда: </p>
                    <span> сом</span>
                </div>
                <div className={styles.order_sum}>
                    <p>Доставка: </p>
                    <span>160 сом</span>
                </div>
                <hr/>
                <div className={styles.order_total}>
                    <h3>Итого: </h3>
                    <span> сом</span>
                </div>
            </div>
            <div className={styles.order_btn}>
                <Link to="#">
                    <button>Заказать</button>
                </Link>
            </div>
        </div>
    );
};

export default Checkout;