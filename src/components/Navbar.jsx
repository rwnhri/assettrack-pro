import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        <Link to="/">Home</Link>
        <Link to="/assets">Assets</Link>
        <a href="/servers">Servers</a>
        <Link to="/about">About</Link>
        <Link to="/routers">Routers</Link>
      </div>
    </nav>
  );
}

export default Navbar;
