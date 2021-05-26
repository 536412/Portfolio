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
                                I completed my elementary school education Here
      </p>
                        </div>
                    </div>
                    <div class="container right">
                        <div class="date">2013</div>
                        <i class="icon"></i>
                        <div class="content">
                            <h2><a href="https://www.minkema.nl/">Het Minkema College Stein</a></h2>
                            <p>
                                Here I got my secondary vocational degree for high school, where I afterwards entered post-secondary vocational education
      </p>
                        </div>
                    </div>
                    <div class="container left">
                        <div class="date">2018</div>
                        <i class="icon"></i>
                        <div class="content">
                        <h2><a href="https://www.rocmn.nl/">ROC Midden Nederland</a></h2>
                            <p>
                                Here on the ROC Midden Nederland I started my Degree on Labratory Researcher, which I dropped out of after only 1 year
      </p>
                        </div>
                    </div>
                    <div class="container right">
                        <div class="date">2019</div>
                        <i class="icon"></i>
                        <div class="content">
                        <h2><a href="https://www.glu.nl/">Grafisch Lyceum Utrecht</a></h2>
                            <p>
                                Grafisch Lyceum Utrecht is where I am currently studying for a degree in Applications and Webdevelopment
      </p>
                        </div>
                    </div>
            
                </div>
            </div>
        </div>
    );
}

export default Education;