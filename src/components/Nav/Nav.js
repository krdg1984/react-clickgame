import React from "react";
import "./Nav.css";

const Nav = props => (
  <nav>
    <ul>
      <li className="brand animated lightSpeedIn">
      {props.title}
      </li>

      <li id="rw">{props.rightWrong}</li>

      <li id="cur-sco">Your Score: {props.score}</li>

      <li id="top-sco">Best Score: {props.topScore}</li>
    </ul>
  </nav>
);

export default Nav;