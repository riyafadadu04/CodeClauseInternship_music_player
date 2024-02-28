import React from "react";
import "./sidebar.css";
import SidebarButtons from "./sidebarButtons";
import { FaPlay } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { MdLibraryMusic } from "react-icons/md";
;

function Sidebar() {

    return (
        <div className="sidebar-container">
            <img
                src="https://e7.pngegg.com/pngimages/349/432/png-clipart-computer-icons-itunes-store-music-random-icons-blue-electronics.png"
                className="profile-image"
                alt="img"
            />
            <div className="sidebar-text">
                <SidebarButtons title="Players" to="/players" icon={<FaPlay />} />
                <SidebarButtons title="artists" to="/artists" icon={<MdFavorite />} />
                <SidebarButtons title="Library" to="/" icon={<MdLibraryMusic />} />
            </div>
        </div>
    );
}

export default Sidebar;