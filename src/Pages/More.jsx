import React from "react";
import Icons from '../Components/icons';
import Member from "../Components/Teammember";
function More(){
    return (
        <div className="More-div" id = "More">
                <div className="team">
                    <h1>Team</h1>
                    <div className="Team-group">
                        <div className="team-member">
                            <Icons circle="true" lsize="8rem" src="https://images.unsplash.com/photo-1564932437263-dbf5578771bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1147&q=80" />
                            <h4>Priyanshu Chaudhary</h4>
                            <p>web developer</p>
                            <p>working as chem quam ebitis soluta quisquam, et suscipit officiis enim sit facere eveniet ad alias elige</p>
                        </div>
                        <Member 
                            circle="true" lsize="8rem" src="https://images.unsplash.com/photo-1564932437263-dbf5578771bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1147&q=80"
                            name = "Nikhilesh Jain" 
                            prof = "web developer"
                            intro = "working as cheif executive Lorbitis soluta quisquam, et suscipit officiis enim sit facere eveniet ad alias elige"
                        />
                        
                
                    </div>
                </div>
            </div>
    )
}
export default More;