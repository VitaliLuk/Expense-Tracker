import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const { logout } = useContext(UserContext);
  const location = useLocation();

  let navbarClass = "navbar-home";
  if (location.pathname.startsWith("/income")) navbarClass = "navbar-income";
  if (location.pathname.startsWith("/expense")) navbarClass = "navbar-expense";
  if (location.pathname.startsWith("/transactions")) navbarClass = "navbar-edit";

  return (
    <nav className={`navbar ${navbarClass}`}>
      <div className="navbar-left">
        <Link to="/">Home</Link>
        <Link to="/income">Przychody</Link>
        <Link to="/expense">Wydatki</Link>
        <Link to="/transactions">Edytuj</Link>
      </div>
      <div className="navbar-right">
        <button onClick={logout}>Wyloguj</button>
      </div>
    </nav>
  );
};

export default Navbar;


