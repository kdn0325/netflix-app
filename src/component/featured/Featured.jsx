import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import React from 'react';
import "./Featured.scss";

const Featured = ({type}) => {
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type==="movie" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre"></select>
                        <option>Genre</option>
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
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined/>
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Featured
