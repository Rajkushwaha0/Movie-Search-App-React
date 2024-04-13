import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar-wrapper">
      <div>
        <Link to={"/"} className="title">
          Movie Com
        </Link>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="What movie are thinking about..." />
      </div>
      <div>Theme</div>
    </div>
  );
}

export default Navbar;
