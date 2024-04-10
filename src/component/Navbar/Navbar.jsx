import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to={"/"} className="title">
        MovieCom
      </Link>
    </div>
  );
}

export default Navbar;
