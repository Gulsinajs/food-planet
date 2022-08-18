import React, {useState} from 'react';
import styles from './Delivery.module.css';
import {toast} from "react-hot-toast";

const Delivery = () => {

    const [name, setName] = useState(null);
    const [imgUrl, setImgUrl] = useState(null);
    const [price, setPrice] = useState(null);
    const [title, setTitle] = useState(null);
    const [subTitle, setSubTitle] = useState(null);
    const [commit, setCommit] = useState(null);
    const [date, setDate] = useState(null);
    const [category, setCategory] = useState(null);

    const getValue = (e) => {
        console.log(e.currentTarget.value);
        if (e.currentTarget.id === 'name') {
            setName(e.currentTarget.value);
        } else if (e.currentTarget.id === 'img_url') {
            setImgUrl(e.currentTarget.value);
        } else if (e.currentTarget.id === 'price') {
            setPrice(e.currentTarget.value);
        } else if (e.currentTarget.id === 'title') {
            setTitle(e.currentTarget.value);
        } else if (e.currentTarget.id === 'subTitle') {
            setSubTitle(e.currentTarget.value);
        } else if (e.currentTarget.id === 'commit') {
            setCommit(e.currentTarget.value);
        } else if (e.currentTarget.id === 'date') {
          setDate(e.currentTarget.value);
        } else if (e.currentTarget.id === 'category') {
            setCategory(e.currentTarget.value);
        }
    }

    const saveData = () => {
        const data = {
            name,
            price,
            image: imgUrl,
            title,
            subTitle,
            commit,
            date
        }
        console.log(data);
        let url = '';
        if (category === '1') {
            url = 'http://localhost:3001/burgers';
        } else if (category === '2') {
            url = 'http://localhost:3001/pizzas';
        } else if (category === '3') {
            url = 'http://localhost:3001/feedbacks'
        }

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }

        fetch(url, options)
            .then(response => {
                if (response.ok) {
                    toast.success('Товар успешно добавлен');
                } else {
                    toast.error('Что-то произошло. Статус: ' + response.status);
                }
            })
    }

    return (
        <div className={styles.container}>
            <h1>Добавление товаров</h1>
            <form className={styles.form} action="javascript:void(0)">
                <div>
                    <label htmlFor="name">Название</label>
                    <input type="text" id="name" onChange={getValue}/>
                </div>
                <div>
                    <label htmlFor="img_url">Адрес изображения</label>
                    <input type="text" id="img_url" onChange={getValue}/>
                </div>
                <div>
                    <label htmlFor="price">Цена</label>
                    <input type="text" id="price" onChange={getValue}/>
                </div>
                <div>
                    <label htmlFor="title">Название продукта</label>
                    <input type="text" id="title" onChange={getValue}/>
                </div>
                <div>
                    <label htmlFor="subTitle">Описание</label>
                    <input type="text" id="subTitle" onChange={getValue}/>
                </div>
                <div>
                    <label htmlFor="commit">Комментарий</label>
                    <textarea name="commit" id="commit" onChange={getValue}></textarea>
                </div>
                <div>
                    <label htmlFor="">Дата</label>
                    <input type="date" onChange={getValue}/>
                </div>
                <div>
                    <label htmlFor="category">Категория</label>
                    <select id="category" onChange={getValue}>
                        <option value="0">Выберите</option>
                        <option value="1">Burgers</option>
                        <option value="2">Pizzas</option>
                        <option value="3">Feedbacks</option>
                    </select>
                </div>
                <div>
                    <button onClick={saveData}>Добавить</button>
                </div>
            </form>
        </div>
    );
};

export default Delivery;