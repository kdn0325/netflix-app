import { PlayArrow,Add, ThumbUpAltOutlined,ThumbDownOutlined} from '@material-ui/icons';
import axios from 'axios';
import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import "../ListItem/ListItem.scss";

const ListItem = ({item,index}) => {
    const [isHovered,setIsHovered]=useState(false);
    const [movie,setMovie]=useState({});
    useEffect(() => {
        const getMovie = async () => {
        try{
            const res = await axios.get("/movies/find/"+item,{
                headers: {
                    token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGI3NGIyNjFlMzgwYTM5YWZjZDI0MyIsImlzQWRtaW4iOiJmYWxzZSIsImlhdCI6MTY0NDk0MDk5NCwiZXhwIjoxNjQ1MzcyOTk0fQ.AFxXuO7HRup2w4RgUxOXF9kKFCtnJUCu0r0OsHX0Fr4"
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
        <Link to ={{ pathname:"/watch", movie: movie }}>
          <div className="listItem" style={{ left: isHovered && index * 225 - 50 + index * 2.5 }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
              <img src={movie.img} alt={movie.title}/>
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
