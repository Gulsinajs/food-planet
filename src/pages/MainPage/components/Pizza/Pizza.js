import React, {useEffect, useState} from 'react';
import toast from 'react-hot-toast';
import styles from './Pizza.module.css';
import Button from "../Burger/Button";

const Pizza = () => {

    const [pizzas, setPizzas] = useState([]);

    const getPizzas = () => {
        const url = ' http://localhost:3001/pizzas';

        fetch(url)
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    toast.error('Произошла ошибка. Статус ошибки: ' + response.status);
                }
            })
            .then(data => setPizzas(data))
    }

    const getProductPizzas = (data) => {
        // console.log(data);
        const id = data.id;
        let cart = JSON.parse(localStorage.getItem('cartPage')) || {};
        cart[id] = {...data, count: 1}

        localStorage.setItem('cartPage', JSON.stringify(cart))
    }

    useEffect(() => {
        getPizzas();
    }, [])

    return (
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
                {
                    pizzas.map(item => {
                        return <div key={item.id} className={styles.pizzaBox}>
                                <img src={item.image} alt=""/>
                                <h3>{item.title}</h3>
                                <p>{item.subTitle}</p>
                                <p className={styles.price}>{item.price}<span> сом</span></p>
                                <Button/>
                            <div className={styles.blueBtn}>
                                <button onClick={() => getProductPizzas(item)}>В корзину</button>
                            </div>
                        </div>
                    })
                }
            </div>
            <div className={styles.showBtn}>
                <button>Показать еще</button>
            </div>
        </div>
    );
};

export default Pizza;