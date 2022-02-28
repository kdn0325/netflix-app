import { ArrowDropDown,Notifications, Search } from '@material-ui/icons'
import React, { useContext, useState } from 'react';
import "./Navbar.scss";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthContext';
import {logout} from "../../AuthContext/AuthAction"

const Navbar = () => {
    const [isScolled,setIsScolled]=useState(false);
    const {dispatch} = useContext(AuthContext);
    window.onscroll=()=>{
        setIsScolled(window.pageYOffset===0 ? false :true)
        return ()=> (window.onscroll =null);
    };
    return (
        <div className={isScolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png" alt="img"/>
                    <Link to = "/" className="link">
                    <span>홈</span>
                    </Link>
                    <Link to = "/series" className="link">
                    <span>시리즈</span>
                    </Link>
                    <Link to = "/movies" className="link">
                    <span>영화</span>
                    </Link>
                    <span>New! 요즘 대세 콘텐츠</span>
                    <span>내가 찜한 콘텐츠</span>
                </div>
                <div className="right">
                    <Search className="icon"/>
                    <span>KID</span>
                    <Notifications className="icon"/>
                    <img src="http://placekitten.com/100/100" alt="img"/>
                    <div className="profile">
                        <ArrowDropDown className="icon"/>
                        <div className="options">
                            <span>Settings</span>
                            <span onClick={()=>dispatch(logout())}>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
