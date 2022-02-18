import { ArrowBackOutlined } from '@material-ui/icons'
import React from 'react';
import { useLocation } from 'react-router-dom';
import "./Watch.scss"
import { Link } from 'react-router-dom';

const Watch = () => {
    const location = useLocation()
    const movie = location.movie;
    return (
        <div className="watch">
            <Link to="/">
                <div className="back">
                    <ArrowBackOutlined/>
                    Home
                </div>
                <video className="video" autoPlay progress controls src={movie?.video}></video>
            </Link>
        </div>
    )
}

export default Watch
