import React from 'react';
import "./Home.scss";
import Navbar from '../../component/Navbar/Navbar';
import Featured from '../../component/featured/Featured';
import List from '../../component/List/List';

const Home = () => {
    return (
        <div className="home">
            <Navbar/>
            <Featured type="movie"/>
            <List/>
        </div>
    )
}

export default Home;
