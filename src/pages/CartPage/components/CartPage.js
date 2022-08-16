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

    const changeCount = (e, data) => {
        const goods = JSON.parse(localStorage.getItem('cartPage'));
        goods[data.id].count = +e.currentTarget.value;
        console.log(goods);
        localStorage.setItem('cartPage', JSON.stringify(goods));
        getProducts();
    }

    const getTotalSum = () => {
        return goods.reduce((sum, item) => {
            return sum + (item.count * item.price);
        }, 0);
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
                            <td>
                                <input onChange={e => changeCount(e, item)} defaultValue={item.count}
                                       type="number"/>
                            </td>
                            <td><p><span>{item.price}</span> сом</p></td>
                            <td><p><span>{item.count * item.price}</span> сом</p></td>
                            <td className={styles.delete_in_cart}>
                                <button onClick={() => deleteGoods(item.id)}><img src={xCircle} alt=""/></button>
                            </td>
                        </tr>
                    )
                }
                </tbody>
            </table>
            <div className={styles.count_element}>
                <h3>Итого: <span>{getTotalSum()}</span><span>сом</span></h3>
            </div>
            <div className={styles.place_order}>
                <Link to="/"><img src={Back} alt=""/>Продолжить покупки</Link>
                <Link to="/checkout">
                    <button>Оформить заказ</button>
                </Link>
            </div>
        </div>
    );
};

export default CartPage;