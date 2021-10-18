// import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link, NavLink } from "react-router-dom";
import { useCartContext } from "../context/cartContext";
import "../styles/navbar.scss";
import cartLogo from "../img/cart.png";

export const NavBar = () => {
  const { iconCart } = useCartContext();
  return (
    <>
      <header>
        <div className="header__title">
          <h1>
            <Link to="/"> Sweet-Style </Link>
          </h1>
          <h2>Ropa & Accesorios</h2>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="menu">
                <li className="nav-item">
                  <NavLink
                    to="/category/pantalones"
                    className="nav-link"
                    activeClassName="active"
                  >
                    {" "}
                    Pantalones{" "}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/category/remeras"
                    className="nav-link"
                    activeClassName="active"
                  >
                    {" "}
                    Remeras{" "}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/category/buzos"
                    className="nav-link"
                    activeClassName="active"
                  >
                    {" "}
                    Buzos{" "}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/category/vestidos"
                    className="nav-link"
                    activeClassName="active"
                  >
                    {" "}
                    Vestidos{" "}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/category/shorts"
                    className="nav-link"
                    activeClassName="active"
                  >
                    {" "}
                    Shorts{" "}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/category/contacto"
                    className="nav-link"
                    activeClassName="active"
                  >
                    {" "}
                    Contacto{" "}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/cart"
                    className="nav-link"
                    activeClassName="active"
                  >
                    <img src={cartLogo} alt="cartLogo" id="cartLogo" />
                    <iconCart />
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
