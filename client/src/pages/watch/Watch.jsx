import { ArrowBackOutlined } from '@material-ui/icons'
import React from 'react';
import { useLocation } from 'react-router-dom';
import "./Watch.scss"
import { Link } from 'react-router-dom';

const Watch = () => {
    const state = useLocation();
    console.log(state)
    return (
        <div className="watch">
            <Link to="/">
                <div className="back">
                    <ArrowBackOutlined/>
                    Home
                </div>
                <video className="video" autoPlay progress controls src=""/>
            </Link>
        </div>
    )
}

export default Watch
