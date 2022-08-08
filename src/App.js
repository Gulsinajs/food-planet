import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./pages/MainPage/components/MainPage";
import CartPage from "./pages/CartPage/components/CartPage";
import NotFound from "./pages/MainPage/components/NotFound/NotFound";
import Menu from "./pages/MainPage/components/Menu/Menu";
import Burger from "./pages/MainPage/components/Burger/Burger";
import Pizza from "./pages/MainPage/components/Pizza/Pizza";

function App() {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/menu" element={<Menu/>}/>
                    <Route path="/menu/burger" element={<Burger/>}/>
                    <Route path="/menu/pizza" element={<Pizza/>}/>
                    <Route path="/cart" element={<CartPage/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>

        </>
    );
}

export default App;
