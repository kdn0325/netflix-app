import { PlayArrow,Add, ThumbUpAltOutlined,ThumbDownAltOutlined } from '@material-ui/icons';
import axios from 'axios';
import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import "../ListItem/ListItem.scss";

const ListItem = ({index,item}) => {
    const [isHovered,setHovered]=useState(false);
    const [movie,setMovie]=useState({});
    useEffect(()=>{
        const getMovie = async ()=>{
            try{
                const res = await axios.get("movies/find"+movie,
                {
                    headers:{
                        token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGI3NGIyNjFlMzgwYTM5YWZjZDI0MyIsImlzQWRtaW4iOiJmYWxzZSIsImlhdCI6MTY0NDk0MDk5NCwiZXhwIjoxNjQ1MzcyOTk0fQ.AFxXuO7HRup2w4RgUxOXF9kKFCtnJUCu0r0OsHX0Fr4"
                    },
                });
                setMovie(res.data)
            }catch(err){
                console.log(err);
            }
        };
        getMovie()
    },[item])
    return (
        <Link to={{pathname:"/watch",movie:movie}}>
            <div className="listitem" style={{left:isHovered && index *225-50+index*2.5}} onMouseEnter={()=>{setHovered(true)}} onMouseLeave={()=>{setHovered(false)}}>
                <img src={movie?.img} alt="" />
                {isHovered &&(
                <div>
                    <video src={movie.trailer} autoPlay={true} loop></video>
                    <div className="itemInfo">
                        <div className="icons">
                            <PlayArrow className="icon"/>
                            <Add className="icon"/>
                            <ThumbUpAltOutlined className="icon"/>
                            <ThumbDownAltOutlined className="icon"/>
                        </div>
                        <div className="itemInfoTop">
                            <span>{movie.duration}</span>
                            <span className="limit">{movie.limit}</span>
                            <span>{movie.year}</span>
                        </div>
                        <div className="desc">
                            {movie.desc}
                        </div>
                        <div className="genre">{movie.genre}</div>
                    </div>
                </div>
                )}
            </div>
        </Link>
    )
}

export default ListItem
