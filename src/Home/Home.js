import React from 'react';
import "./Home.scss";
import Navbar from '../component/Navbar/Navbar';
import Featured from '../component/featured/Featured';

const Home = () => {
    return (
        <div className="home">
            <Navbar/>
            <Featured type="movie"/>
        </div>
    )
}

export default Home
