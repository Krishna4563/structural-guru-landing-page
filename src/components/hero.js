import React from "react";
import "./hero.css";
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";

const Hero = () => {
  return (
    <section>
      <div className="logo-img">
        <img src={img1} alt="" width={100} height={100} />
      </div>
      <p className="quotes-1">
        WELCOME TO PRACTICAL STRUCTURAL DESIGN CONSULTANCY TRAINING
      </p>

      <div className="quotes">
        <p className="quotes-2">
          HERE IS YOUR GATEWAY FOR LEARNING STRUCTURAL DESIGN IN PRACTICAL WAY !
        </p>
      </div>

      <div className="course-main-div">
        <div className="left-div">
          <h1 className="left-title">sample</h1>
          <div className="left-content"></div>
        </div>

        <div className="center-line"></div>

        <div className="right-div">
          <h1 className="right-title">sample</h1>
          <div className="right-content"></div>
        </div>
      </div>

      <div className="video-titles-div">
        <h1 className="yt-title1">
          ABOUT OUR PRACTICAL STRUCTURAL DESIGN CONSULTANCY TRAINING
        </h1>
        <div className="center-line-2"></div>
        <h2 className="yt-title2">Watch this explanation of this training!</h2>
      </div>

      <div className="video-div">
        <iframe
          width="900"
          height="550"
          src="https://www.youtube.com/embed/0npY5ja2xP8?autoplay=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <div className="motto-quote">
        <p>OUR MOTTO: HELP EACH OTHER ! GROW TOGETHER !! </p>
      </div>

      <div className="course-img-div">
        <img src={img2} alt="img2" className="course-img-2" />
      </div>
    </section>
  );
};

export default Hero;
