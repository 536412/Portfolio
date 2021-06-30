import React from 'react';
import "./projects.css";

const Projects = () =>{
    return(
        <div id="projects">
            <div id="fade">
                <h1>My past projects</h1>
                <div className="pPanel">
                <a rel="noreferrer" target="_blank" href="https://github.com/536412/runaway"><div id="project1"></div></a>
                    <p><a rel="noreferrer" target="_blank" href="https://github.com/536412/runaway">Super Runaway with JS</a></p>
                </div>
                <div className="pPanel">
                <a rel="noreferrer" target="_blank" href="https://github.com/536412/tictactoe"><div id="project2"></div></a>
                    <p><a rel="noreferrer" target="_blank" href="https://github.com/536412/tictactoe">TicTacToe With JS</a></p>
                </div>
                <div className="pPanel">
                <a rel="noreferrer" target="_blank" href="https://github.com/536412/portfolio"><div id="project3"></div></a>
                    <p><a rel="noreferrer" target="_blank" href="https://github.com/536412/portfolio">Porftolio Source code</a></p>
                </div>
                <div className="pPanel">
                <a rel="noreferrer" target="_blank" href="https://github.com/536412/tetris"><div id="project4"></div></a>
                    <p><a rel="noreferrer" target="_blank" href="https://github.com/536412/tetris">tetris with React.js</a></p>
                </div>
            </div>
        </div>
    )
}

export default Projects;