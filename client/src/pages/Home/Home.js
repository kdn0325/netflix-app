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
                            token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMTlkMzBkNDkzNGY2ZThlMTRjODcyZCIsImlzQWRtaW4iOiJmYWxzZSIsImlhdCI6MTY0NTg1OTYxNSwiZXhwIjoxNjQ2MjkxNjE1fQ.Q4fv1xlxme-0JzHfE11VvH5Al38ZWqylYZ6aXNcuwJg"
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
