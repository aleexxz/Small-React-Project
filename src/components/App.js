import React from "react";

export default function App(props) {
    return (
        <div className="container">
            <div className="wrapper">
                <img src={props.ctn.imageUrl} alt="img" className="card-img"></img>
                <div className="info">
                    <div className="location-wrapper">
                        <i class="fa-solid fa-location-dot"></i><span className="loc">{props.ctn.location}</span>
                        <a href={props.ctn.googleMapsUrl} target="_blank">View on Google Maps</a>
                    </div>
                    <h1>{props.ctn.title}</h1>
                    <p className="date">{props.ctn.startDate} - {props.ctn.endDate}</p>
                    <p className="desc">{props.ctn.description}</p>
                </div>
            </div>
        </div>
    )
}