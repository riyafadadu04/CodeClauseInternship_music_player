import axios from "axios";
import React, { useEffect, useState } from "react";
import './widgets.css';
function Widgets(artistName) {


    const [artistSuggestions, setArtistSuggestions] = useState([]);
    useEffect(() => {
        axios.get('https://riyafadadu04.github.io/musicApi/data.json')
            .then((res) => {
                setArtistSuggestions(res.data.songs?.artists?.artist_name);
            })
    }, []);

    return (
        <div>
            <div>
                suggestions
                {artistSuggestions?.map((song) =>(
                    <div>{song}</div>
                ))}
            </div>
        </div>
    )
}

export default Widgets;