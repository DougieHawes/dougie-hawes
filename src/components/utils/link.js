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
