import React from 'react';
import "./work.css";

const Work = () => {
    return(
        <div id="work">
            <br></br><h1>Work Experience</h1>
            <div class="timeline2">
                    <div class="container2 left">
                        <div class="date">2016</div>
                        <i class="icon"></i>
                        <div class="content">
                            <h2><a href="https://www.ahvleuterweide.nl/">Albert Heijn Vleuterweide</a></h2>
                            <p>
                                Part-time worker for Albert Heijn vleuterweide as retail personel
      </p>
                        </div>
                    </div>
                    <div class="container2 right">
                        <div class="date">2018</div>
                        <i class="icon"></i>
                        <div class="content">
                            <h2><a href="https://www.fesleyen.nl/">Fesleyen Bistro & Lunchroom</a></h2>
                            <p>
                                Overall server & Restaurant employee at Fesleyen Bistro, where I performed  tasks from cleanup, to preparing and serving food
      </p>
                        </div>
                    </div>
                    <div class="container2 left">
                        <div class="date">2021</div>
                        <i class="icon"></i>
                        <div class="content">
                        <h2><a href="https://picnic.app/nl/">Picnic Technologies</a></h2>
                            <p>
                                Delivery driver for Picnic technologies
      </p>
                        </div>
                    </div>
            
                </div>
            </div>
    );

}

export default Work;