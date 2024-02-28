import React from "react";
import './album.css';

function AlbumInfo({ album }) {

    const albumArtist = album?.artists?.artist_name;
    const albumTitle = album?.title;
    const albumType = album?.type;

    return (  
        <div className="album-info">
            <div className="marquee">
                <p className="album-title">{`${albumTitle} - ${albumArtist}`}</p>
            </div>
            <div>
                <p className="album-artist">{`${albumTitle} is very popular ${albumType} song by "${albumArtist}".`}</p>
            </div>
        </div>
    )
}

export default AlbumInfo; 