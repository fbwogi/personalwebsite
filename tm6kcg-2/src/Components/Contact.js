import React from 'react';
import "/src/styles.css"

export default function Contact() {
    
    return (
        <footer className="site-footer">
        <div className="footer-content">
            <div className="contact-us">
                <h3>Contact </h3>
                <p>Email: festobwogi@gmail.com</p>
                <p>Address: Los Angeles, CA</p>
            </div>
            <div className="personal-links">
                <h3>Personal Links</h3>
                <p><a href="https://www.linkedin.com/in/festo-bwogi/" target="_blank" rel="noopener noreferrer">LinkedIn {'\n'}</a></p>
                <p>
                    <a href="https://github.com/fbwogi"> 
                    GitHub
 
                    </a>
                </p>

            </div>
        </div>
    </footer>
    );
};


