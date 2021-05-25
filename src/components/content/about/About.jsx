import React from 'react';
import "./about.css";

const about = () =>{
    return(
        <div id="about">
            <div className="panel" >
            <i class="fas fa-home fa-2x"></i><span>Introduction</span>
            <p>My Name is Alper Aydinhan, an 19 year old student that currently studies application and webdevelopment at the Grafish Lyceum Utrecht, i am currently looking for an internship at either a VR company or a cybersecurity company, as i plan to branch out towards these fields after i get my degree</p>
            </div>
            <div className="panel" id="panel2">
            <i class="fas fa-microscope fa-2x"></i><span>Intrests</span>
            <p>My current intrests would be in the field of science, particularly biological, nuclear and physical science topics, these intrest me quite alot. Besides a peaked intrest within science i also intrest myself in programming, particularly Cybersecurity, blockchain and Javascript development</p>
            </div>
            <div className="panel">
            <i class="fas fa-laugh-beam fa-2x"></i><span>Hobbies</span>
            <p>Hobbies i currently partake in are Programming, Sporting and visiting the gym, Playing video games with my friends, and watching various E-Sports scenes, particularly League of Legends, Escape from Tarkov and Valorant
            <br></br><br></br>
            besides these hobbies, i also sometimes play on my VR headset that i have at home!
            </p>
            </div>
        </div>
    );
}

export default about;