import React from "react";
import './album.css';

function AlbumImg({ url }) {
    return (
        <div className="albumImage">
            <img src={url} alt="ablum" className="albumImg" />
            <div className="albumImage-shadow">
                <img src={url} alt="ablum" className="albumShadow" />
            </div>
        </div>
    ) 
}

export default AlbumImg; 