import React from "react";
import myImage from "/src/image.jpeg";
console.log(myImage);
export default function Navbar() {
  const navbarStyle = {
    backgroundImage: "url(${myImage})",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100px"
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light custom-navbar"
      style={navbarStyle}
    >
      <a className="navbar-brand" href="#">
        Festo Bwogi
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <a className="nav-link" href="#">
            {" "}
            Home{" "}
          </a>
          <a className="nav-link" href="#">
            {" "}
            About{" "}
          </a>
          <a className="nav-link" href="#">
            {" "}
            Education{" "}
          </a>
          <a className="nav-link" href="#">
            {" "}
            Experience{" "}
          </a>
          <a className="nav-link" href="#">
            {" "}
            Projects{" "}
          </a>
          <a className="nav-link" href="#">
            {" "}
            Skills{" "}
          </a>
        </ul>
      </div>
    </nav>
  );
}
