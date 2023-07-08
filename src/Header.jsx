import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <nav>
      <h1>
        <span style={{ color: "red" }}>T</span>
        <span style={{ color: "green" }}>e</span>
        <span style={{ color: "blue" }}>c</span>
        <span style={{ color: "gray" }}>h</span>
        <span style={{ color: "cyan" }}>i</span>
        <span style={{ color: "crimson" }}>n</span>
        <span style={{ color: "black" }}>i</span>
        <span style={{ color: "goldenrod" }}>o</span>
      </h1>
      <main>
        <HashLink to={"/#home"}>Home</HashLink>
        <Link to={"/contact"}>Contact</Link>
        <HashLink to={"#about"}>About</HashLink>
        <HashLink to={"/#brands"}>Brands</HashLink>
        <Link to={"/services"}>Services</Link>
      </main>
    </nav>
  );
};

export default Header;
