// file imports
// media
import Logo from "../../media/images/logo.png";
// styles
import "./style.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header-title-container">
        <img className="header-logo" src={Logo} alt="" />
      </div>
    </div>
  );
};

export default Header;
