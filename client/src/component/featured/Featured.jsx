import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./Featured.scss";

const Featured = ({type}) => {
    const [content,setContent] = useState({});

    useEffect(()=>{
        const getRandomContent = async ()=>{
            try{
                const res = await axios.get(`/movies/random?type=${type}`,
                {
                    headers:{
                        token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGI3NGIyNjFlMzgwYTM5YWZjZDI0MyIsImlzQWRtaW4iOiJmYWxzZSIsImlhdCI6MTY0NDk0MDk5NCwiZXhwIjoxNjQ1MzcyOTk0fQ.AFxXuO7HRup2w4RgUxOXF9kKFCtnJUCu0r0OsHX0Fr4"
                    }
                }
                );
                setContent(res.data[0]);
            }catch(err){
                console.log(err);
            }
        }
        getRandomContent();
    },[type]);
    console.log(content);
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type==="movies" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>장르</option>
                        <option value="한국 드라마">한국 드라마</option>
                        <option value="미국 시리즈">미국 시리즈</option>
                        <option value="영국 드라마">영국 드라마</option>
                        <option value="아시아 드라마">아시아 드라마</option>
                        <option value="버라이어티/예능">버라이어티/예능</option>
                        <option value="애니">애니</option>
                        <option value="코미디">코미디</option>
                        <option value="로맨스">로맨스</option>
                        <option value="드라마 장르">드라마 장르</option>
                        <option value="액션">액션</option>
                        <option value="스릴러">스릴러</option>
                        <option value="SF & 판타지">SF & 판타지</option>
                        <option value="호러">호러</option>
                        <option value="키즈">키즈</option>
                        <option value="청소년">청소년</option>
                        <option value="다큐시리즈">다큐시리즈</option>
                    </select>
                </div>
            )}
            <img width="100%" src={content.img}/>
            <div className="info">
                <img src={content.imgTitle}/>
                <span className="desc">
                    {content.desc}
                </span>
                <div className="buttons">  
                    <button className="play">
                        <PlayArrow/>
                        <span>재생</span>
                    </button>
                    <button className="more">
                        <InfoOutlined/>
                        <span>상세정보</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Featured
