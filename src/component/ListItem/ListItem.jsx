import { PlayArrow,Add, ThumbUpAltOutlined,ThumbDownAltOutlined } from '@material-ui/icons';
import React,{useState} from 'react';
import "../ListItem/ListItem.scss";

const ListItem = ({index}) => {
    const [isHovered,setHovered]=useState(false);
    const trailer = "https://upload.wikimedia.org/wikipedia/commons/d/d0/Caminandes-_Llama_Drama_-_Short_Movie.ogv"
    return (
        <div className="listitem" style={{left:isHovered && index *225-50+index*2.5}} onMouseEnter={()=>{setHovered(true)}} onMouseLeave={()=>{setHovered(false)}}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Title_screen_for_the_Netflix_series%2C_Kingdom.png" alt="" />
            {isHovered &&(
            <div>
                <video src={trailer} autoPlay={true} loop></video>
                <div className="itemInfo">
                    <div className="icons">
                        <PlayArrow className="icon"/>
                        <Add className="icon"/>
                        <ThumbUpAltOutlined className="icon"/>
                        <ThumbDownAltOutlined className="icon"/>
                    </div>
                    <div className="itemInfoTop">
                        <span>1 hour 14 mins</span>
                        <span className="limit">+16</span>
                        <span>1999</span>
                    </div>
                    <div className="desc">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda quo neque explicabo nisi quibusdam cumque sequi sed impedit iste atque. Delectus magnam cupiditate porro eum quam recusandae maiores eius ex.
                    </div>
                    <div className="genre">Action</div>
                </div>
            </div>
            )}
        </div>
    )
}

export default ListItem
