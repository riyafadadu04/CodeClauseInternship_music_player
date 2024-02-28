import React from "react";
import './songcard.css';
import AlbumImg from './albumImg';
import AlbumInfo from './albumInfo';

function Songcard({ cardAlbum}) {
    return (
        <div className="songCard">
            <AlbumImg url={cardAlbum?.album?.coverImg} />
            <AlbumInfo album={cardAlbum} />
        </div>
    ) 
} 

export default Songcard;  