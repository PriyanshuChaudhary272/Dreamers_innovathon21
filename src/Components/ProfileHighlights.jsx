import React from "react";

function Highlights(props) {
    return (
        <div className="highlights-div">
            <div className="highlights-div-content">
                <h2>{props.heading}</h2>
                <hr style = {{width : "30%"}}/>
                <p>{props.para}</p>
            </div>
        </div>
    )
}
export default Highlights;