import React from 'react';
import "./about.css";

const about = () =>{
    return(
        <div id="about">
            <div className="panel" >
            <i class="fas fa-home fa-2x"></i><span>Introductions</span>
            <p>My Name is Alper Aydinhan, a 19-year-old student that currently studies application and webdevelopment at Grafish Lyceum Utrecht. I am currently looking for an internship at either a VR company, or a cybersecurity company. As I plan to speialize out towards these fields after I get my degree.</p>
            </div>
            <div className="panel">
            <i class="fas fa-microscope fa-2x"></i><span>Interests</span>
            <p>My current interests are in the field of science, particularly biological, nuclear and physical science topics, these interest me quite alot because it shows how things function and work, which peaks my curiosity.<br></br> Besides this I have alot of experience in the following programming languages<br></br><br></br>&gt;Javascript<br></br>&gt;HTML + CSS<br></br>&gt;React.js<br></br>&gt;Python<br></br><br></br>I also have limited knowledge about PHP and Database programming</p>
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