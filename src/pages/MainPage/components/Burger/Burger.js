import React, {useEffect, useState} from 'react';
import toast from 'react-hot-toast';
import styles from './Burger.module.css';
import Button from "./Button";

const Burger = () => {

     const [burgers, setBurgers] = useState([]);

    const getBurgers = () => {
        const url = 'http://localhost:3001/burgers';

        fetch(url)
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    toast.error('Произошла ошибка. Статус ошибки: ' + response.status);
                }
            })
            .then(data => setBurgers(data))
    }

    const getProduct = (data) => {
        // console.log(data);
        const id = data.id;
        let cart = JSON.parse(localStorage.getItem('cartPage')) || {};
        cart[id] = {...data, count: 1}

        localStorage.setItem('cartPage', JSON.stringify(cart))
    }

    useEffect(() => {
        getBurgers();
    }, [])

    return (
        <div className={styles.burger}>
            {
                burgers.map(item => {
                    return <div key={item.id} className={styles.burgerBox}>
                        <img src={item.image} alt="cheeseburger"/>
                        <h3>{item.title}</h3>
                        <p>{item.subTitle}</p>
                        <h3>{item.price} сом</h3>
                        <Button/>
                        <div className={styles.redBtn}>
                            <button onClick={()=> getProduct(item)}>В корзину</button>
                        </div>
                    </div>
                })
            }

        </div>
    );
};

export default Burger;