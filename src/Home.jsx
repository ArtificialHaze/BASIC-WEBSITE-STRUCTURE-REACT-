import React from "react";
import "./home.scss";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Techinio</h1>
          <p>Best solutions.</p>
        </main>
      </div>
      <div className="home-2">
        <img src="" alt="BackgroundGraphics" />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            voluptatum repudiandae est ab quod porro, quo tenetur ratione
            repellat temporibus.
          </p>
        </div>
      </div>
      <div className="home-3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            ea cupiditate eveniet necessitatibus, deleniti ullam enim earum
            natus reprehenderit, id quod excepturi, sequi quidem ipsam.
          </p>
        </div>
      </div>
      <div className="home-4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{ animationDelay: "0.7s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div style={{ animationDelay: "0.9s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
