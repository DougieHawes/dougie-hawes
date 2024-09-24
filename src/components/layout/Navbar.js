// file imports
// components
// utils
import { Link1 } from "../utils/link";
// styles
import "./style.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link1 to="/" text="home" />
      <Link1 to="/about" text="about" />
      <Link1 to="/portfolio" text="portfolio" />
      <Link1 to="/skills" text="skills" />
      <Link1 to="/contact" text="contact" />
    </div>
  );
};

export default Navbar;
