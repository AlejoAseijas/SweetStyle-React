import React from 'react'
import CartWidget from './CartWidget'


function NavBar() {
    return (
      <header>
          <div className='header__title'>
              <h1>Sweet-Style</h1>
              <h2>Ropa & Accesorios</h2>
          </div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
             <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="menu">
                <li className="nav-item">
                    <a className="nav-link" href="pages/pantalones.html">Pantalones</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="pages/remeras.html">Remeras</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="pages/buzos.html">Buzos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="pages/vestidos.html">Vestidos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="pages/shorts.html">Shorts</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="pages/contacto.html">Contacto</a>
                </li>
            </ul>
            <CartWidget/>
        </div>
    </div>
</nav>
      </header>
    )
}

export default NavBar
