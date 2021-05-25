import React from 'react';
import "./projects.css";

const Projects = () =>{
    return(
        <div id="projects">
            <div id="fade">
                <h1>My Past projects</h1>
                <div className="pPanel">
                    <div id="runaway"></div>
                    <p><a href="https://github.com/536412/runaway">Super Runaway with JS!</a></p>
                </div>
                <div className="pPanel">
                    <div id="tictac"></div>
                    <p><a href="https://github.com/536412/tictactoe">TicTacToe With JS!</a></p>
                </div>
            </div>
        </div>
    )
}

export default Projects;