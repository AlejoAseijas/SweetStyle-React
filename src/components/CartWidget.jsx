import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/style.scss'


function CartWidget() {
    return (
        <li className='nav-item' id='cartLogo'>
                <Link to={ `/cart`}> 
                    <a className='nav-link'> <img src='https://img.icons8.com/pastel-glyph/32/000000/fast-cart.png' alt='' /> </a>
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0' id='subMenu'>
                        <li className='nav-item' id='itemsCart'>
                        <div id='selectedProducts' className='containerProductsMenu'> </div>
                        <div id='storageProducts' className='containerProductsMenu'> </div>
                        </li>
                    </ul>
                </Link>
        </li>
    )
}

export default CartWidget
