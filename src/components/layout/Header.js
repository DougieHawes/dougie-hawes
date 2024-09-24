// package imports
import { motion } from "framer-motion";

// file imports
// components
// layout
import Navbar from "./Navbar";
// utils
import { Link2 } from "../utils/link";
// media
import GithubLogo from "../../media/images/github-logo.svg";
import Logo from "../../media/images/logo.png";
// styles
import "./style.scss";
// variables
import { fadeDuration } from "../../variables/variables";

const Header = () => {
  const fadeVariants = {
    hidden: { opacity: 0, y: -70 },
    visible: { opacity: 1, y: 0, transition: { duration: fadeDuration } },
  };

  return (
    <motion.div
      className="header"
      initial="hidden"
      animate="visible"
      variants={fadeVariants}
    >
      <div className="header-title-container">
        <img className="header-logo" src={Logo} alt="" />
        <h1 className="header-name">Dougie Hawes</h1>
        <p className="header-subtitle">FullStack Web Developer</p>
      </div>
      <div className="header-links">
        <Link2 to="https://github.com/DougieHawes" icon={GithubLogo} />
      </div>
      <Navbar />
    </motion.div>
  );
};

export default Header;
