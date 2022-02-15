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
                            token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGI3NGIyNjFlMzgwYTM5YWZjZDI0MyIsImlzQWRtaW4iOiJmYWxzZSIsImlhdCI6MTY0NDk0MDk5NCwiZXhwIjoxNjQ1MzcyOTk0fQ.AFxXuO7HRup2w4RgUxOXF9kKFCtnJUCu0r0OsHX0Fr4"
                        }
                    }
                )
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
            {lists.map((list)=>(
                <List list={list}/>
            ))}
        </div>
    );
};

export default Home;
