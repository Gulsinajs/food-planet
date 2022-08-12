import React, {useState} from 'react';
import styles from './AddReviews.module.css';
import {toast} from "react-hot-toast";

const AddReviews = () => {
    const [imgUrl, setImgUrl] = useState(null);
    const [name, setName] = useState(null);
    const [comment, setComment] = useState(null);
    const [date, setDate] = useState(null);

    const getValue = (e) => {
        // console.log(e.currentTarget);
        if (e.currentTarget.id === 'img_url') {
            setImgUrl(e.currentTarget.value);
        } else if (e.currentTarget.id === 'name') {
            setName(e.currentTarget.value);
        } else if (e.currentTarget.id === 'comment') {
            setComment(e.currentTarget.value);
        } else if (e.currentTarget.id === 'date') {
            setDate(e.currentTarget.value);
        }
    }

    const saveData = () => {
        const url = ' http://localhost:3001/feedBacks';

        const data = {
            image: imgUrl,
            userName: name,
            commit: comment,
            date
        }
        // console.log(data);
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(data)
        }

        fetch(url, options)
            .then(response => {
                if (response.ok) {
                    toast.success('Комментарий успешно добавлен');
                } else {
                    toast.error('Что-то произошло. Статус: '+ response.status);
                }
            })
    }

    return (
        <div className={styles.add_reviews}>
            <h1>Добавить отзыв</h1>
            <form className={styles.form_reviews} action="javascript:void(0)">
                <div>
                    <label htmlFor="img_url">Адрес изображения</label>
                    <input type="text" id="img_url" onChange={getValue}/>
                </div>
                <div>
                    <label htmlFor="name">Имя</label>
                    <input type="text" id="name" onChange={getValue}/>
                </div>
                <div>
                    <label htmlFor="comment">Комментарий</label>
                    <textarea id="comment" onChange={getValue}></textarea>
                </div>
                <div>
                    <label htmlFor="date">Дата</label>
                    <input type="date" id="date" onChange={getValue}/>
                </div>
                <div>
                    <button onClick={saveData}>Добавить</button>
                </div>
            </form>
        </div>
    );
};

export default AddReviews;