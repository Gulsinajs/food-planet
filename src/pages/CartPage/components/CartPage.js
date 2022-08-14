import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import styles from './CartPage.module.css';
import xCircle from '../../../media/icons/x-circle.png';
import Back from '../../../media/icons/back-arroy.png';
import {toast} from "react-hot-toast";

const CartPage = () => {
    const [goods, setGoods] = useState([]);

    const getProducts = () => {
        const goods = JSON.parse(localStorage.getItem('cartPage'));
        // console.log(Object.values(goods));
        setGoods(Object.values(goods));
    }

    const deleteGoods = (id) => {

        const options = {
            method: 'DELETE'
        }

        fetch(options)
            .then(response => {
                if (response.ok) {
                    toast.success('Успешно удалено');
                } else {
                    toast.error('Ошибка. Статус ошибки: ' + response.status);
                }
            })
    }

    // const getGoods = () => {
    //     const url = 'http://localhost:3001/burgers';
    //
    //     fetch(url)
    //         .then(response => {
    //             if (response.ok) {
    //                 return response.json();
    //             } else {
    //                 toast.error('Произошла ошибка. Статус: ' + response.status);
    //             }
    //         })
    //         .then(data => setGoods(data))
    // }

    useEffect(getProducts, []);

    return (
        <div className={styles.cart_page}>
            <div className={styles.cart_title}>
                <h3>Корзина</h3>
                <h4>Товары в вашей корзине</h4>
            </div>
            <table>
                <thead>
                <tr className={styles.products_title}>
                    <th colSpan={2}>Продукт</th>
                    <th>Количество</th>
                    <th>Цена</th>
                    <th>К оплате</th>
                </tr>
                </thead>
                <tbody>
                {
                    goods.map(item =>
                        <tr key={item.id} className={styles.products_in_cart}>
                            <td><img src={item.image} alt=""/></td>
                            <td>{item.title}</td>
                            <td><input type="number"/>
                                <span className={styles.count_button}>
                                <button>-</button>
                                <span> 1 </span>
                                <button>+</button>
                            </span>
                            </td>
                            <td><p><span>{item.price}</span> сом</p></td>
                            <td><p><span>{item.price}</span> сом</p></td>
                            <td className={styles.delete_in_cart}>
                                <button onClick={()=> deleteGoods(item.id)}><img src={xCircle} alt=""/></button>
                            </td>
                        </tr>
                    )
                }
                </tbody>
                <tfoot>
                <tr className={styles.count_element}>
                    <th colSpan={4}><p>Итого: </p></th>
                    <th><p><span></span> сом</p></th>
                </tr>
                </tfoot>
            </table>
            <div className={styles.place_order}>
                <Link to="/"><img src={Back} alt=""/>Продолжить покупки</Link>
                <button>Оформить заказ</button>
            </div>
        </div>
    );
};

export default CartPage;