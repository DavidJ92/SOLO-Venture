import React from "react";
import logo from "../assets/soloventure-logo.png";

const Contact = () => {
  return (
    <div className="container mt-2">
      <h2 className="display-6">Contact</h2>
      <div className="row mb-3">
        <div className="col">
          <img
            src={logo}
            width="50%"
            alt="Team Procedural"
            className="rounded mx-auto d-block"
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col">
          <h2 className="display-6">David</h2>
          <a href={"https://github.com/DavidJ92"} className="link-dark">
            David's Github
          </a>
        </div>
        <div className="col">
          <h2 className="display-6">Za</h2>
          <a href={"https://github.com/zamatheson"} className="link-dark">
            Za's Github
          </a>
        </div>
        <div className="col">
          <h2 className="display-6">Yang</h2>
          <a href={"https://github.com/Xue-F-Yang"} className="link-dark">
          Yang's Github
          </a>
        </div>
        <div className="col">
          <h2 className="display-6">Preston</h2>
          <a href={""} className="link-dark">
            Preston's Github
          </a>       
        </div>
      </div>
    </div>
  );
};

export default Contact;
