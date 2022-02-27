import React, {useEffect, useState } from 'react';
import "./Home.scss";
import Navbar from '../../component/Navbar/Navbar';
import Featured from '../../component/featured/Featured';
import List from '../../component/List/List';
import axios from 'axios';

const Home = ({type}) => {
    const [lists,setLists] = useState([]);
    const [genre,setGenre] = useState(null);
    
    useEffect(()=>{
        const getRandomLists = async ()=>{
            try{
                const res = await axios.get(
                    `lists${type ? "?type="+type: ""}${genre ? "&genre="+ genre : ""}`,
                    {
                        headers:{
                            token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
                        },
                    }
                );
                setLists(res.data)
            }catch(err){
                console.log(err);
            }
        };
        getRandomLists();
    },[type,genre]);
    return (
        <div className="home">
            <Navbar/>
            <Featured type={type} setGenre={setGenre}/>
            {lists.map((list,index)=>(
                <List key={index} list={list}/>
            ))}
        </div>
    );
};

export default Home;
