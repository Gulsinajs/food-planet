import React from "react";
import styles from "./MainPage.module.css";
import Header from "../../../components/Header/Header";
import Banner from "./Banner/Banner";
import FeedBack from "./Feedback/FeedBack";
import NewProducts from "./NewProducts/NewProducts";
import Menu from "./Menu/Menu";
import Burger from "./Burger/Burger";
import Pizza from "./Pizza/Pizza";
import About from "./About/About";
import Footer from "../../../components/Footer/Footer";

const MainPage = () => {

    return (
        <div className={styles.mainPage}>
            <Header/>
            <Banner/>
            <NewProducts/>
            <Burger/>
            <Menu/>
            <Pizza/>
            <About/>
            <FeedBack/>
            <Footer/>
        </div>
    );
};

export default MainPage;