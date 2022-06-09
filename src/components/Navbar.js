import React from "react";
import logo from "../logo.svg"

export default function Navbar() {
    return (
        <nav className="top-navbar">
            <div className="nav-wrapper">
                <img src={logo} alt="logo" className="logo"></img>
                <span className="logo-text">my travel journal</span>
            </div>
        </nav>
    )
}