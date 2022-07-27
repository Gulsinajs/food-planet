import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import NewProducts from "./pages/NewProducts/NewProducts";
import Menu from "./pages/Menu/Menu";
import Burger from "./pages/Burger/Burger";
import Pizza from "./pages/Pizza/Pizza";


function App() {
    return (
        <>
            <Header/>
            <Main/>
            <NewProducts/>
            <Burger/>
            <Menu/>
            <Pizza/>
            <BrowserRouter>
                <Routes>
                    {/*<Route path="/" element={<Main/>}/>*/}
                    {/*<Route path="/nemProducts" element={<NewProducts/>}/>*/}
                    {/*<Route path="/burger" element={<Burger/>}/>*/}
                    {/*<Route path="/menu" element={<Menu/>}/>*/}
                    {/*<Route path="/pizza" element={<Pizza/>}/>*/}
                </Routes>
            </BrowserRouter>

        </>
    );
}

export default App;
