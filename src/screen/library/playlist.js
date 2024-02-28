import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './library.css';


function Playlist(props) {
  
    const [playlistData, setPlaylistData] = useState([]);
    useEffect(() => {
        axios.get('https://riyafadadu04.github.io/musicApi/data.json')
            .then((res) => {
                setPlaylistData(res.data.playlist)
            })
    }, []);
    
    const navigate = useNavigate();
    const playPlaylist = (id, title) => {
        navigate("/players", { state: { id: id, title: title } });
    };

    return (  
        <div className="library-playlist"> 
            {playlistData.map((playlistItem) => (
                <div
                    key={playlistItem.p_id}
                    className="library-Pdata"
                    onClick={() => playPlaylist(playlistItem.p_id, playlistItem.p_title)}
                >
                    <img src={playlistItem.p_cover} alt="playlist-img" className="playlist-cover" />
                    <p className="playlist-title">{playlistItem.p_title}</p>
                </div>
            ))}
        </div>
    );
}

export default Playlist;