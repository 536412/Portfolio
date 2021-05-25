import React from 'react';
import "./education.css";

const Education = () => {
    return (
        <div id="education">
            <div id="fade2">
                <br></br><h1>Education</h1>
                <div class="timeline">
                    <div class="container left">
                        <div class="date">2005</div>
                        <i class="icon"></i>
                        <div class="content">
                            <h2><a href="https://www.obsvleuterweide.nl/">OBS Vleuterweiden</a></h2>
                            <p>
                                This is where i completed my elementary school education
      </p>
                        </div>
                    </div>
                    <div class="container right">
                        <div class="date">2013</div>
                        <i class="icon"></i>
                        <div class="content">
                            <h2><a href="https://www.minkema.nl/">Het Minkema College Stein</a></h2>
                            <p>
                                Here i got my VMBO degree for high school, where i afterwards entered MBO
      </p>
                        </div>
                    </div>
                    <div class="container left">
                        <div class="date">2018</div>
                        <i class="icon"></i>
                        <div class="content">
                        <h2><a href="https://www.rocmn.nl/">ROC Midden Nederland</a></h2>
                            <p>
                                Here on the ROC Midden Nederland i started my Degree on Labratory Researcher, which i dropped out of after 1 year
      </p>
                        </div>
                    </div>
                    <div class="container right">
                        <div class="date">2019</div>
                        <i class="icon"></i>
                        <div class="content">
                        <h2><a href="https://www.glu.nl/">Grafisch Lyceum Utrecht</a></h2>
                            <p>
                                Grafisch Lyceum Utrecht is where i am currently studying for a degree in Applications and Webdevelopment
      </p>
                        </div>
                    </div>
            
                </div>
            </div>
        </div>
    );
}

export default Education;