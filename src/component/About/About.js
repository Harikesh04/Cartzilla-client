import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import Footer from "../layout/Footer/Footer"
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/harikeshsingh_";
  };
  return (
    <>
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dhuv7iqg9/image/upload/v1659892713/Avtars/profile_yduqv1.jpg"
              alt="Founder"
            />
            <h1>Harikesh Singh</h1>

            <a
              href="https://www.linkedin.com/in/harikesh-singh-506503202/"
              target="blank"
            >
              <LinkedInIcon className="youtubeSvgIcon" />
            </a>
            <a href="https://instagram.com/harikeshsingh_" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
          <div className="aboutSectionContainer2">
            <h2>
            🌟 Harikesh Singh, B.Tech IT student. Created this project in my 2nd year for web development mastery. Now open for exciting opportunities. Connect with me at singhharikesh294@gmail.com. Let's talk possibilities! 🚀            </h2>
            
            
           

            
          </div>
        </div>
      </div>
    </div>
      <Footer/>
   
    </>
  );
};

export default About;
