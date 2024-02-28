import React from "react";
import "./queue.css";
function Queue({ tracks, setCurrentIndex}) {
    return (
        <div className="queue">
            <div className="queue-body">
                <p className="upNext"> Playlist </p>
                <div className="queue-list">
                    {tracks?.map((track, index) => (
                        <div
                            key={index + "key"}
                            className="queue-item"
                            onClick={() => setCurrentIndex(index)}
                        >
                            <img src={track?.album?.coverImg} className="track-img" alt="img" />
                            <div className="track-title">
                                <p className="track-name">{track?.title}</p>
                                <p className="track-artist">{track?.artists?.artist_name}</p>
                            </div>
                        </div>
                    ))}
                </div>
        
            </div>
        </div>
    )
}

export default Queue; 