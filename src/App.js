import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Toaster} from "react-hot-toast";
import './App.css';
import MainPage from "./pages/MainPage/components/MainPage";
import CartPage from "./pages/CartPage/components/CartPage";
import NotFound from "./pages/MainPage/components/NotFound/NotFound";
import Menu from "./pages/MainPage/components/Menu/Menu";
import Burger from "./pages/MainPage/components/Burger/Burger";
import Pizza from "./pages/MainPage/components/Pizza/Pizza";
import SideBar from "./pages/Admin/SideBar/SideBar";
import Reviews from "./pages/Admin/Reviews/Reviews";
import AddReviews from "./pages/Admin/AddReviews/AddReviews";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/menu" element={<Menu/>}/>
                    <Route path="/menu/burger" element={<Burger/>}/>
                    <Route path="/menu/pizza" element={<Pizza/>}/>
                    <Route path="/cart" element={<CartPage/>}/>
                    <Route path="*" element={<NotFound/>}/>
                    <Route path="/admin/sideBar" element={<SideBar/>}/>
                    <Route path="/admin/add-reviews" element={<AddReviews/>}/>
                    <Route path="/sideBar/reviews" element={<Reviews/>}/>
                </Routes>
                <Footer/>
                <Toaster/>
            </BrowserRouter>
        </>
    );
}

export default App;
