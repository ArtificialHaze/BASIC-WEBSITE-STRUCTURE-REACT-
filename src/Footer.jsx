import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <div>
        <h1>Techinio</h1>
        <p>&copy; All rights reserved.</p>
      </div>
      <div>
        <h5>Follow us</h5>
        <div>
          <a target="_blank" href="https://www.youtube.com">
            Youtube
          </a>
          <a target="_blank" href="https://www.instagram.com">
            Instagram
          </a>
          <a target="_blank" href="https://www.github.com">
            Github
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
