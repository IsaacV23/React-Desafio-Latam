import { Link } from "react-router-dom";

const Navbar = () => {

  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-dark bg-dark px-4 d-flex justify-content-between">

      <div className="d-flex gap-2">

        <Link to="/" className="btn btn-outline-light">
          🍕 Home
        </Link>

        {token ? (
          <>
            <Link to="/profile" className="btn btn-outline-light">
              🔓 Profile
            </Link>

            <button className="btn btn-outline-light">
              🔒 Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-outline-light">
              🔐 Login
            </Link>

            <Link to="/register" className="btn btn-outline-light">
              🔐 Register
            </Link>
          </>
        )}
      </div>

      <Link to="/cart" className="btn btn-outline-info">
        🛒 Total: ${total.toLocaleString()}
      </Link>

    </nav>
  );
};

export default Navbar;