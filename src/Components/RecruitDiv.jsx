import React from "react";
import { Link } from "react-router-dom";
import Icons from "./icons";
function RecruitDiv(props) {
    return (
        <div className="highlights-div">
            <div className="highlights-div-content recruit-Div">
                <div className="recruit-icon-name-button">
                    <div className="recruit-icon-name">
                        <div>
                           
                            <Icons lsize="2.5rem" src={props.iconsrc} />
                            
                        </div>
                        <div className="company-name media-company-name">
                            <h4>{props.name}</h4>
                            <p>{props.description}</p>
                        </div>
                    </div>
                    <div className="button-requirement">
                        <button style ={{backgroundColor: props.active==="true"?"#269014":"#c57b26"}} className="recruit-button">{props.active==="true"?"Active":"Close"}</button>
                        <div className="company-name media-company-name">
                            <h5>{props.recruirement}</h5>
                            <p>{props.employee} Employee</p>
                        </div>
                    </div>
                </div>
                <form action="">
                    {props.active === "true"?
                    <button className="recruit-apply-button">Apply</button>: null}
                </form>
            </div>
        </div>
    )
}
export default RecruitDiv;