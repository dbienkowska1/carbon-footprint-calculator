import icons from "../../constants/icons";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img
        src={icons.logo}
        alt="Carboon footprint calculator app logo"
        className="logo"
      ></img>

      <span className="title">Carbon Footprint Calculator</span>
    </div>
  );
};

export default Header;
