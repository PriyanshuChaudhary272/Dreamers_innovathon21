import React from "react";
import UserlistDiv from "../Components/UserlistDiv";

import {Users} from "../DummyData"

function UserList(){
    return (
        <div className="recruit">
            <h1 style={{textAlign: "center"}}>All Users.</h1>
            <hr style = {{width: "30%"}}/>

            {Users.map(p=>(
            <UserlistDiv 
            key={p.id} Users={p}
            iconsrc = "https://cdn-icons.flaticon.com/png/512/3932/premium/3932506.png?token=exp=1633943083~hmac=aa399c25bf6959d8eb9524961e25719c"
            name = {JSON.parse(JSON.stringify(p.username))}
            description = {JSON.parse(JSON.stringify(p.description))}
            recruirement = {JSON.parse(JSON.stringify(p.recruirement))}
            active = {JSON.parse(JSON.stringify(p.active))}
            
            /> 
            ))}
           
        </div>
    )
}
export default UserList;