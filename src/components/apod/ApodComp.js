import React from "react";
import "./apod.css"
const ApodComp = (props) => {

    const {apod} = props;

    return (
        <div className="apod-container">
            <h1>{apod.title}</h1>
            <h2>{apod.date}</h2>
            <img className="apod-images" alt={apod.title} src={apod.url}/>
            <p>{apod.explanation}</p>
        </div>
    )
}

export default ApodComp;