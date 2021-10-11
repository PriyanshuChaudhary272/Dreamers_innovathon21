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
            iconsrc = "https://cdn-icons.flaticon.com/png/512/2978/premium/2978607.png?token=exp=1633897793~hmac=ff447fa0f0897df1d04577a6b33d4474"
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