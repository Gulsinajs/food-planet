import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import Content from "./components/Content/Content";
import NewProducts from "./components/NewProducts/NewProducts";
import Burger from "./pages/Burger/Burger";


function App() {
    return (
        <>
            <Header/>
            <Content/>
            <NewProducts/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Burger/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
