import React from "react";
import { IconContext } from "react-icons";
import { Link, useLocation } from "react-router-dom";
import "./sidebar.css";
export default function SidebarButtons(props) {

    
    const location = useLocation();
    const isActive = location.pathname === props.to;
    const btnClass = isActive ? "icons-body active" : "icons-body";

    return (
        <Link to={props.to}>
            <div className={btnClass}>
                <IconContext.Provider value={{ className:"btn-body" }}>
                    <p className="icon">{props.icon}</p>
                    <p className="icon-title">{props.title}</p>
                </IconContext.Provider>
            </div>
        </Link>
    );
} 
