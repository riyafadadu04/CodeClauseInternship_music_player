import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './artists.css';

function Artists() {
    const [likeData, setLikeData] = useState([]);
    useEffect(() => {
        axios.get('https://riyafadadu04.github.io/musicApi/data.json')
            .then((res) => {
                setLikeData(res.data.artist_list)
            })
    }, []);
    
    const navigate = useNavigate();
    const playPlaylist = (id, artist_name) => {
        navigate("/players", { state: { id: id, artist_name : artist_name } });
    };

    return (  
        <div className="library-playlist"> 
            {likeData.map((listItem) => (
                <div
                    key={listItem.a_id}
                    className="library-Pdata"
                    onClick={() => playPlaylist(listItem.a_id, listItem.artist_name)}
                >
                    <img src={listItem.artist_img} alt="playlist-img" className="playlist-cover" />
                    <p className="playlist-title">{listItem.artist_name}</p>
                </div>
            ))}
        </div>
    );
}

export default Artists;