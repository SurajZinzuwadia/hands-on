// This code represent Author's personal details
import React from 'react';
import './author.css';
const About = (props) => {
    const author = props.author;
    return ( 
        <div className="about-main">
            <div className="content">
                {author ? (
                    <>
                <p className="info">Email: <span><b>{author.email}</b></span></p>
                <p className="info">Phone number:<span><b>123456789</b></span></p>
                <p className="info">Number of Papers:<span><b>10</b></span></p>
                </>
                ): null}

            </div>
        </div>
     );
}
 
export default About;