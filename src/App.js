import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Toaster} from "react-hot-toast";
import './App.css';
import MainPage from "./pages/MainPage/components/MainPage";
import CartPage from "./pages/CartPage/components/CartPage";
import Admin from "./pages/Admin/Admin";
import NotFound from "./pages/MainPage/components/NotFound/NotFound";
import Menu from "./pages/MainPage/components/Menu/Menu";
import SideBar from "./pages/Admin/SideBar/SideBar";
import Reviews from "./pages/Admin/Reviews/Reviews";
import AddReviews from "./pages/Admin/AddReviews/AddReviews";
import Checkout from "./pages/CartPage/components/Checkout/Checkout";
import Header from "./components/Header/Header";
import Pizza from "./pages/MainPage/components/Pizza/Pizza";
import Burger from "./pages/MainPage/components/Burger/Burger";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Header/>}>
                        <Route index element={<MainPage/>}/>
                        <Route path="menu" element={<Menu/>}/>
                        <Route path="/menu/pizza" element={<Pizza/>}/>
                        <Route path="/menu/burger" element={<Burger/>}/>
                        <Route path="/cart" element={<CartPage/>}/>
                        <Route path="/checkout" element={<Checkout/>}/>
                    </Route>
                    <Route path="/admin" element={<Admin/>}>
                        <Route path="/admin/sideBar" element={<SideBar/>}/>
                        <Route path="/admin/sideBar/reviews" element={<Reviews/>}/>
                        <Route path="/admin/add-reviews" element={<AddReviews/>}/>
                    </Route>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
                <Toaster/>
            </BrowserRouter>
        </>
    );
}

export default App;
