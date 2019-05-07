import React from "react";
import image from "../../image/a.png";

function About() {
  return (
    <div className="about">
      <div className="container">
        <h1 className="text-center title"> ABOUT</h1>
        <div className="about_me">
          <div className="about_img">
          <h4>What I Like..?</h4>
          <span>Music</span>
          <span>Design</span>
          <span>Games</span>
          <span>Kind</span>
          <span>Programing</span>
          <span>think</span>
          <span>Anime</span>
          <span>Pencil</span>
            <div>
              <img src={image} alt="" />
            </div>
          </div>
          <div className="about_info">
            <h2 className="title_style">My Name Is Ayman </h2>
            <div className="about_info_text">
              <p>
                Lorem ipsum dolor sit amen, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. 
              </p>
              <p>
                Duis irure voluptate adipisicing sunt. Esse aliquip excepteur labore ea ad est consectetur enim laborum officia exercitation. Cupidatat reprehenderit cupidatat exercitation fugiat fugiat dolore. Nulla id aute velit est nisi ut esse nostrud ut laborum non in. Laboris proident mollit laborum elit incididunt cupidatat deserunt incididunt enim.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
