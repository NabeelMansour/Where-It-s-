import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <section>
      <nav className="nav">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/events">
          <button>Events</button>
        </Link>
        <Link to="/order">
          <button>Order</button>
        </Link>
      </nav>
    </section>
  );
}

export default Navbar;
