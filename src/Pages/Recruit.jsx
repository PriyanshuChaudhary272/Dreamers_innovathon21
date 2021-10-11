import React, { useState } from "react";
import RecuitDiv from "../Components/RecruitDiv";
import {posts} from "../DummyData"

function Recruit(){
    // const [like,setLike]=useState(posts.like);
    return (
        <div className="recruit">
            <h1 style={{textAlign: "center"}}>Search for Jobs.</h1>
            <hr style = {{width: "30%"}}/>

            {posts.map(p=>(
            <RecuitDiv 
            key={p.id} post={p}
            iconsrc = "https://cdn-icons.flaticon.com/png/512/2978/premium/2978607.png?token=exp=1633897793~hmac=ff447fa0f0897df1d04577a6b33d4474"
            name = {JSON.parse(JSON.stringify(p.name))}
            description = {JSON.parse(JSON.stringify(p.description))}
            active = {JSON.parse(JSON.stringify(p.active))}
            recruirement = {JSON.parse(JSON.stringify(p.recruirement))}
            employee = {JSON.parse(JSON.stringify(p.employee))}
            /> 
            ))}
           
            <RecuitDiv 
            iconsrc = "https://cdn-icons.flaticon.com/png/512/2978/premium/2978607.png?token=exp=1633897793~hmac=ff447fa0f0897df1d04577a6b33d4474"
            name = "Company's Name" 
            description = "aodfalek adflsd dfmaiores maiores enim dicta ut natus iure hic architecto sint beatae incidunt in amet numquam officiis consectetur omnis corporis eius asperiores accusantium inventore veniam nesciunt exercitationem necessitatibus. Soluta, quis distinctio.Facere, odit deserunt totam quis ipsa nisi tempori" 
            active = "false"
            recruirement = "Full-Stack developer"
            employee = "1-8"
            /> 
            <RecuitDiv 
            iconsrc = "https://cdn-icons.flaticon.com/png/512/2978/premium/2978607.png?token=exp=1633897793~hmac=ff447fa0f0897df1d04577a6b33d4474"
            name = "Company's Name" 
            description = "aodfalek adflsd dfmaiores maiores enim dicta ut natus iure hic architecto sint beatae incidunt in amet numquam officiis consectetur omnis corporis eius asperiores accusantium inventore veniam nesciunt exercitationem necessitatibus. Soluta, quis distinctio.Facere, odit deserunt totam quis ipsa nisi tempori" 
            active = "true"
            recruirement = "Full-Stack developer"
            employee = "1-8"
            /> 
            <RecuitDiv 
            iconsrc = "https://cdn-icons.flaticon.com/png/512/2978/premium/2978607.png?token=exp=1633897793~hmac=ff447fa0f0897df1d04577a6b33d4474"
            name = "Company's Name" 
            description = "aodfalek adflsd dfmaiores maiores enim dicta ut natus iure hic architecto sint beatae incidunt in amet numquam officiis consectetur omnis corporis eius asperiores accusantium inventore veniam nesciunt exercitationem necessitatibus. Soluta, quis distinctio.Facere, odit deserunt totam quis ipsa nisi tempori" 
            active = "false"
            recruirement = "Full-Stack "
            employee = "1-8"
            /> 
            <RecuitDiv 
            iconsrc = "https://cdn-icons.flaticon.com/png/512/2978/premium/2978607.png?token=exp=1633897793~hmac=ff447fa0f0897df1d04577a6b33d4474"
            name = "Company's Name" 
            description = "aodfalek adflsd dfmaiores maiores enim dicta ut natus iure hic architecto sint beatae incidunt in amet numquam officiis consectetur omnis corporis eius asperiores accusantium inventore veniam nesciunt exercitationem necessitatibus. Soluta, quis distinctio.Facere, odit deserunt totam quis ipsa nisi tempori" 
            active = "false"
            recruirement = "Full-Stack developer"
            employee = "1-3"
            /> 
        </div>
    )
}
export default Recruit;