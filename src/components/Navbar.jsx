import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        <Link to="/">Home</Link>
        <Link to="/assets">Assets</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;