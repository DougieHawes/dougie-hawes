// file imports
// components
// layout
import Navbar from "./Navbar";
// media
import Logo from "../../media/images/logo.png";
// styles
import "./style.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header-title-container">
        <img className="header-logo" src={Logo} alt="" />
        <h1 className="header-name">Dougie Hawes</h1>
        <p className="header-subtitle">FullStack Web Developer</p>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
