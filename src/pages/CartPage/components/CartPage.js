import React from 'react';
import {Link} from "react-router-dom";
import styles from './CartPage.module.css';
import xCircle from '../../../media/icons/x-circle.png';
import Back from '../../../media/icons/back-arroy.png';

const CartPage = () => {
    return (
        <div className={styles.cart_page}>
            <div className={styles.cart_title}>
                <h3>Корзина</h3>
                <h4>Товары в вашей корзине</h4>
            </div>
            <table>
                <tr>
                    <td colSpan={2}>Продукт</td>
                    <td>Количество</td>
                    <td>Цена</td>
                    <td>К оплате</td>
                </tr>
                <tr>
                    <td><img src="" alt=""/></td>
                    <td><p>burger</p></td>
                    <td><input type="number"/></td>
                    <td><p><span></span> сом</p></td>
                    <td><p><span></span> сом</p></td>
                    <td><a href=""><img src={xCircle} alt=""/></a></td>
                </tr>
                <tr>
                    <td colSpan={4}><p>Итого: </p></td>
                    <td><p><span></span> сом</p></td>
                </tr>
            </table>
            <div className={styles.products_container}>
                <div className={styles.products_title}>
                </div>
                <div className={styles.products_in_cart}>
                </div>

                <div className={styles.count_element}>
                </div>
                <div className={styles.place_order}>
                    <Link to="/menu"><img src={Back} alt=""/>Продолжить покупки</Link>
                    <button>Оформить заказ</button>
                </div>
            </div>
        </div>
    );
};

export default CartPage;