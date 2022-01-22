import { ArrowDropDown,Notifications, Search } from '@material-ui/icons'
import React, { useState } from 'react'
import "./Navbar.scss"

const Navbar = () => {
    const [isScolled,setIsScolled]=useState(false);
    window.onscroll=()=>{
        setIsScolled(window.pageYOffset===0 ? false :true)
        return ()=> (window.onscroll =null);
    };
    return (
        <div className={isScolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png"/>
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Moives</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className="icon"/>
                    <span>KID</span>
                    <Notifications className="icon"/>
                    <img src="http://placekitten.com/100/100"/>
                    <div className="profile">
                        <ArrowDropDown className="icon"/>
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
