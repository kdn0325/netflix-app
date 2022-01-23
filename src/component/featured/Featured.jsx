import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import React from 'react';
import "./Featured.scss";

const Featured = ({type}) => {
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type==="movie" ? "Movies" : "Series"}</span>
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
            <img width="100%" src="http://placekitten.com/1000/1000"/>
            <div className="info">
                <img src="http://placekitten.com/500/500" />
                <span className="desc">
                    Lorem ipsum dolor,  sit amet consectetur adipisicing elit. Iusto magnam similique iste dolor vitae voluptatibus facere quam quasi, voluptates eius fugiat quis nihil ex accusamus eveniet temporibus enim dignissimos natus.
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
