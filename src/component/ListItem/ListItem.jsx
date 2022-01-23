import { PlayArrow,Add, ThumbUpAltOutlined,ThumbDownAltOutlined } from '@material-ui/icons';
import React,{useState} from 'react';
import "../ListItem/ListItem.scss";

const ListItem = ({index}) => {
    const [isHovered,setHovered]=useState(false);
    const trailer = ""
    return (
        <div className="listitem" style={{left:isHovered && index *225-50+index*2.5}} onMouseEnter={()=>{setHovered(true)}} onMouseLeave={()=>{setHovered(false)}}>
            <img src="http://placekitten.com/200/200" alt="" />
            <div className="itemInfo">
                <div className="icons">
                    <PlayArrow/>
                    <Add/>
                    <ThumbUpAltOutlined/>
                    <ThumbDownAltOutlined/>
                </div>
                <div className="itemInfoTop">
                    <span>1 hour 14 mins</span>
                    <span className="limit">+16</span>
                    <span>1999</span>
                </div>
                <div className="dec">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda quo neque explicabo nisi quibusdam cumque sequi sed impedit iste atque. Delectus magnam cupiditate porro eum quam recusandae maiores eius ex.
                </div>
                <div className="genre">Action</div>
            </div>
        </div>
    )
}

export default ListItem
