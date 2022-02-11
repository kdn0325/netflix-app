import { ArrowBackOutlined } from '@material-ui/icons'
import React from 'react';
import "./Watch.scss"

const Watch = () => {
    return (
        <div className="watch">
            <div className="back">
                <ArrowBackOutlined/>
                Home
            </div>
            <video className="video" autoPlay progress controls src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Caminandes-_Llama_Drama_-_Short_Movie.ogv"></video>
        </div>
    )
}

export default Watch
