// package imports
import { Link } from "react-router-dom";

// file imports
// style
import "./style.scss";

export const Link1 = ({ to, text }) => {
  return (
    <Link className="link link1" to={to}>
      {text}
    </Link>
  );
};

export const Link2 = ({ to, icon }) => {
  return (
    <a className="link link2" href={to}>
      <img
        className="link2-icon"
        src={icon}
        alt=""
        target="_blank"
        rel="noreferrer"
      />
    </a>
  );
};
