import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AudioPLayer from "../../components/audioPlayer/audioPlayer";
import Queue from "../../components/queue/queue";
import Songcard from "../../components/songcard/songcard";
import './players.css';


function Players(props) {

    const location = useLocation();
    const [tracks, setTracks] = useState([]);
    const [currentTrack, setCurrentTrack] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        axios.get('https://riyafadadu04.github.io/musicApi/data.json')
            .then((res) => {
                const songOfPlaylist = res.data.songs.filter(song => song?.artists?.artist_name === location.state.artist_name);
                if (location.state) {
                    setTracks(songOfPlaylist);
                    setCurrentTrack(songOfPlaylist[currentIndex]);
                }
            })
    }, [location.state , currentIndex]);
    useEffect(() => {
        setCurrentTrack(setTracks[currentIndex]);
    }, [currentIndex]);


    return (
        <div className="players">
            <div className="left-players-body">
                <AudioPLayer
                    currentTrack={currentTrack}
                    total={tracks}
                    currentIndex={currentIndex}
                    setCurrentIndex={setCurrentIndex}
                />
                
            </div>
            <div className="right-players-body">
                <Songcard cardAlbum={currentTrack} currentIndex={currentIndex} />
                <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} currentIndex={currentIndex} />
            </div>
        </div>
    )
} 

export default Players;