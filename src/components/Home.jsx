import React from 'react';
import './home.css'
import Header from './Header';
import Banner from './Banner';
import OurProduct from './OurProduct';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <OurProduct></OurProduct>
        
            <Footer></Footer>
        </div>
    );
};

export default Home;