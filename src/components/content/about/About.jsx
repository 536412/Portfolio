import React from 'react';
import "./about.css";

const about = () =>{
    return(
        <div id="about">
            <div className="panel" >
            <i class="fas fa-home fa-2x"></i><span>Introductions</span>
            <p>My Name is Alper Aydinhan, an 19 year old student that currently studies application and webdevelopment at the Grafish Lyceum Utrecht, I'm currently looking for an internship at either a VR company or a cybersecurity company, as I plan to branch out towards these fields after I get my degree.</p>
            </div>
            <div className="panel" id="panel2">
            <i class="fas fa-microscope fa-2x"></i><span>Interests</span>
            <p>My current intrests are in the field of science, particularly biological, nuclear and physical science topics, these intrest me quite alot. I also intrest myself in programming, particularly Cybersecurity, blockchain and Javascript development.</p>
            </div>
            <div className="panel">
            <i class="fas fa-laugh-beam fa-2x"></i><span>Hobbies</span>
            <p>Hobbies I currently enjoy partaking in are programming, visiting the gym, Playing video games with my friends, and watching various esports scenes, like League of Legends, Escape from Tarkov and Valorant.
            Besides these hobbies, I also occasionaly play on my VR headset that I have at home!
            </p>
            </div>
        </div>
    );
}

export default about;