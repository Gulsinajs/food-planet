import React from "react";
import styles from "./MainPage.module.css";
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
        <>
            <div className={styles.mainPage}>
                <Banner/>
                <NewProducts/>
                <Burger/>
                <Menu/>
                <Pizza/>
                <About/>
                <FeedBack/>
            </div>
            <Footer/>
        </>

    );
};

export default MainPage;