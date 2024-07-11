import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './Components/Navbar/NavBar';
import HomePage from './Components/HomePage/HomePage';
import MainPage from './Components/MainPage';
import Cart from './Components/Cart/Cart';
import Login from './Components/Login/Login';
import OrderHistory from './Components/OrderHistory/OrderHistory';


function App() {
    return (
        <BrowserRouter>
        <NavBar />
            <div>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/games" element={<MainPage />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/order-history" element={<OrderHistory />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;



