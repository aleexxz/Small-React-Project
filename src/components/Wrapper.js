import React from "react";
import Navbar from "./Navbar";
import App from "./App";
import Data from "./Data";

const containers = Data.map(ctn => {
    return (
        <App
            key={ctn.id}
            ctn={ctn}
        />
    )
});

export default function Wrapper() {
    return (
        <div className="main-wrapper">
            <Navbar />
            {containers}
        </div>
    )
}