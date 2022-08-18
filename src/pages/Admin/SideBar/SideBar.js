import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './SideBar.module.css';
import LogoAdmin from '../../../media/icons/logoAdmin.svg';
import FoodPlanet from '../../../media/icons/FOODPLANET.svg';
import IconMain from '../../../media/icons/iconMain.svg';
import IconOrders from '../../../media/icons/iconOrders.svg';
import IconMenu from '../../../media/icons/iconMenu.svg';
import IconContacts from '../../../media/icons/iconContacts.svg';
import IconReviews from '../../../media/icons/iconReviews.svg';
import IconStaff from '../../../media/icons/iconStaff.svg';


const SideBar = () => {

    return (
        <div className={styles.admin}>
            <div className={styles.side_bar}>
                <div className={styles.navigation}>
                    <div className={styles.side_bar_logo}>
                        <img src={LogoAdmin} alt=""/>
                        <img src={FoodPlanet} alt=""/>
                    </div>
                    <div className={styles.navigation_bar}>
                        <ul>
                            <li className={styles.nav_hover}><NavLink to="/"><img src={IconMain} alt=""/>Главная</NavLink></li>
                            <li className={styles.nav_hover}><NavLink to="/orders"><img src={IconOrders} alt=""/>Заказы</NavLink></li>
                            <li className={styles.nav_hover}><NavLink to="/menu"><img src={IconMenu} alt=""/>Меню</NavLink></li>
                            <li className={styles.nav_hover}><NavLink to="/contacts"><img src={IconContacts} alt=""/>Контакты</NavLink></li>
                            <li className={styles.nav_hover}><NavLink to="/admin/reviews"><img src={IconReviews} alt=""/>Отзывы</NavLink></li>
                            <li className={styles.nav_hover}><NavLink to="/employees"><img src={IconStaff} alt=""/>Сотрудники</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;