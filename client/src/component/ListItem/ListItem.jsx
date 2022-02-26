import { PlayArrow,Add, ThumbUpAltOutlined,ThumbDownOutlined} from '@material-ui/icons';
import axios from 'axios';
import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import "./ListItem.scss";

const ListItem = ({index,item}) => {
    const [isHovered,setIsHovered]=useState(false);
    const [movie,setMovie]=useState({});
    console.log(item)
    
    useEffect(() => {
        const getMovie = async () => {
        try{
            const res = await axios.get("/movies/find/"+item,{
                headers: {
                  token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMTlkMzBkNDkzNGY2ZThlMTRjODcyZCIsImlzQWRtaW4iOiJmYWxzZSIsImlhdCI6MTY0NTg1OTYxNSwiZXhwIjoxNjQ2MjkxNjE1fQ.Q4fv1xlxme-0JzHfE11VvH5Al38ZWqylYZ6aXNcuwJg"
                },
            });
            setMovie(res.data);
            }catch (err) {
                console.log(err);
            }
        };
        getMovie();
      }, [item]);
    return (
        <Link to ={{ pathname:"/watch",movie:movie}}>
          <div className="listitem" style={{ left: isHovered && index * 225 - 50 + index * 2.5 }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
              <img src={movie?.imgsm} alt={movie.title}/>
              {isHovered && (
            <>
              <video src={movie.trailer} autoPlay={true} loop />
              <div className="itemInfo">
                <div className="icons">
                  <PlayArrow className="icon" />
                  <Add className="icon" />
                  <ThumbUpAltOutlined className="icon" />
                  <ThumbDownOutlined className="icon" />
                </div>
                <div className="itemInfoTop">
                  <span>{movie.duration}</span>
                  <span className="limit">+{movie.limit}</span>
                  <span>{movie.year}</span>
                </div>
                <div className="desc">{movie.desc}</div>
                <div className="genre">{movie.genre}</div>
              </div>
            </>
          )}
        </div>
    </Link>
  );
}

export default ListItem
