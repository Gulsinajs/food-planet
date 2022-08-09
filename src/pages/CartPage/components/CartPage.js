import React from 'react';
import {Link} from "react-router-dom";
import styles from './CartPage.module.css';
import xCircle from '../../../media/icons/x-circle.png';
import Back from '../../../media/icons/back-arroy.png';
import burger from '../../../media/images/firstBurger.png';

const CartPage = () => {
    return (
        <div className={styles.cart_page}>
            <div className={styles.cart_title}>
                <h3>Корзина</h3>
                <h4>Товары в вашей корзине</h4>
            </div>
            <table>
                <tr className={styles.products_title}>
                    <th colSpan={2}>Продукт</th>
                    <th>Количество</th>
                    <th>Цена</th>
                    <th>К оплате</th>
                </tr>
                <tr className={styles.products_in_cart}>
                    <td><img src={burger} alt=""/></td>
                    <td><p>burger</p></td>
                    <td><input type="number"/></td>
                    <td><p><span></span> сом</p></td>
                    <td><p><span></span> сом</p></td>
                    <td className={styles.delete_in_cart}><a href="#"><img src={xCircle} alt=""/></a></td>
                </tr>
                <tr className={styles.count_element}>
                    <th colSpan={4}><p>Итого: </p></th>
                    <th><p><span></span> сом</p></th>
                </tr>
            </table>
            <div className={styles.place_order}>
                <Link to="/"><img src={Back} alt=""/>Продолжить покупки</Link>
                <button>Оформить заказ</button>
            </div>
        </div>
    );
};

export default CartPage;