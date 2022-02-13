import React, {useEffect, useState } from 'react';
import "./Home.scss";
import Navbar from '../../component/Navbar/Navbar';
import Featured from '../../component/featured/Featured';
import List from '../../component/List/List';
import axios from 'axios';

const Home = ({type}) => {
    const [lists,setLists] = useState([]);
    const [genre,setGenre] = useState([null]);

    useEffect(()=>{
        const getRandomLists = async ()=>{
            try{
                const res = await axios.get(`lists${type ? "?type="+type: ""}${genre && "genre="+""}`,
                    {
                        headers:{
                            token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDc3YjBmZGYwYjZlM2EwZDA0MjUyYSIsImlzQWRtaW4iOiJmYWxzZSIsImlhdCI6MTY0NDc0Nzk0OSwiZXhwIjoxNjQ1MTc5OTQ5fQ.7ai-3Zi177GVd6AKqV-04_sgHJ94s0JLe-fQ7c7Ye4w"
                        }
                    }
                );
                // setLists(res.data)
            }catch(err){
                console.log(err);
            }
        };
        getRandomLists();
    },[type,genre]);
    return (
        <div className="home">
            <Navbar/>
            <Featured type={type}/>
            {lists.map((list)=>(
                <List list={list}/>
            ))}
        </div>
    );
};

export default Home;
