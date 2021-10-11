import React from "react";
import Icons from "./icons";
function Member(props) {
    return (
        <div className="team-member">
            <Icons circle={props.circle} lsize={props.lsize} src={props.src} />
            <h4>{props.name}</h4>
            <p>{props.prof}</p>
            <p>{props.intro}</p>
        </div>
    )
}
export default Member;