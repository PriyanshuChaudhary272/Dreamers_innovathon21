import React from "react";
import Icons from "./icons";
function UserlistDiv(props) {
    return (
        <div className="highlights-div">
            <div className="highlights-div-content recruit-Div">
                <div className="recruit-icon-name-button">
                    <div className="recruit-icon-name">
                        <div>
                            <Icons lsize="2.5rem" src={props.iconsrc} />
                        </div>
                        <div className="company-name">
                            <h4>{props.name}</h4>
                            <p>{props.description}</p>
                        </div>
                    </div>
                    <div className="button-requirement">
                        
                        <div className="company-name">
                            <h5>{props.recruirement}</h5>
                            <p>{props.employee} Employee</p>
                        </div>
                    </div>
                </div>
                <div>
            
                     <button style ={{backgroundColor: props.active==="true"?"#269014":"#c57b26"}} className="recruit-button">{props.active==="true"?"Open to Work":"Not Available   "}</button>
                </div>
            </div>
        </div>
    )
}
export default UserlistDiv;