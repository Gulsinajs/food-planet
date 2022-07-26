import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import Content from "./components/Content/Content";


function App() {
    return (
        <>
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route path="" element={<Main/>}/>
                </Routes>
            </BrowserRouter>
            <Content/>
        </>
    );
}

export default App;
