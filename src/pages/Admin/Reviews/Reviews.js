import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {toast} from 'react-hot-toast';
import styles from './Reviews.module.css';

const Reviews = () => {
    const [comments, setComments] = useState([]);

    const deleteComments = (id) => {
        const url = 'http://localhost:3001/feedBacks/' + id;

        const options = {
            method: 'DELETE'
        }

        fetch(url, options)
            .then(response => {
                if (response.ok) {
                    toast.success('Deleted');
                    getComments();
                } else {
                    toast.error('Mistake. Status: ' + response.status);
                }
            })
    }

    const getComments = () => {
        const url = 'http://localhost:3001/feedBacks';

        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    toast.error('Mistake. Status: ' + response.status);
                }
            })
            .then(data => setComments(data))
    }

    useEffect(getComments, []);

    return (
        <div className={styles.reviews}>
            <div className={styles.reviews_title}>
                <h2>Отзывы</h2>
                <button>Добавить</button>
            </div>
            <table>
                <tr>
                    <th>Фото</th>
                    <th>Имя</th>
                    <th>Комментарий</th>
                    <th>Дата</th>
                    <th>Действия</th>
                </tr>
                {
                    comments.map(item => {
                        return (
                            <tr>
                                <td><img src={item.image} alt=""/></td>
                                <td>{item.userName}</td>
                                <td><p>{item.commit}</p></td>
                                <td>{item.date}</td>
                                <td>
                                    <button onClick={() => deleteComments(item.id)}>Удалить</button>
                                    <Link to={`/admin/sideBar/${item.id}`}>
                                        <button>Редактировать</button>
                                    </Link>
                                </td>
                            </tr>
                        )
                    })
                }

            </table>
        </div>
    );
};

export default Reviews;