import React from 'react';
import "./contact.css";

const Contact = () =>{
    return(
        <div id="contact">
                <h1>Contacts</h1>
                <p>You can contact me trough the following social media!</p>
                <a href="https://www.linkedin.com/in/alper-aydinhan-ab123b212/"><i class="fab fa-linkedin fa-7x"></i></a>
                <a href="https://twitter.com/Lookatableflip"><i class="fab fa-twitter-square fa-7x"></i></a>
                <a href="mailto:Alper.aydinhan@gmail.com"><i class="fas fa-envelope fa-7x"></i></a>
                <p>If you wish to see MORE of my past projects and current projects, you can find my GitHub here!</p>
                <a href="https://github.com/536412?tab=repositories"><i class="fab fa-github-square fa-7x" ></i></a>
        </div>
    )
}

export default Contact;