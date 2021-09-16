import React from 'react'

function Footer() {
    return (
        <footer>
    <div className="container">
      <div className="ftr">
          <h5>Contacto</h5>
          <ul className="content">
              <li><a href="#">sweetstyle@gmail.com</a></li>
              <li><a href="#">(+54) 1138785999</a></li>
              <li><a href="#">Moron,Bs As</a></li>
          </ul>
      </div>
      <div className="ftr">
          <h5>Redes Sociales</h5>
          <ul className="content">
              <li><a href="https://www.facebook.com/Sweetstyle2020-100831641722289"><img src="https://img.icons8.com/metro/26/000000/facebook-new--v2.png"/> Facebook </a></li>
              <li><a href="https://api.whatsapp.com/send?phone=1122467445&text=Muchas%20gracias%20por%20comunicarte%20con%20nosotros"><img src="https://img.icons8.com/pastel-glyph/26/000000/whatsapp--v2.png"/> Whatsapp </a></li>
              <li><a href="https://www.instagram.com/sweet.style2020/?igshid=1ojdv7c8u5lcu"><img src="https://img.icons8.com/ios-glyphs/26/000000/instagram-new.png"/> Instagram </a></li>
          </ul>
      </div>
      <div className="ftr">
          <h5>Newsletter</h5>
          <form action="#">
              <input type="email" placeholder="Ingrese su email"/>
              <div className="btn">
                  <input type="submit" value="Unirse"/>
              </div>
          </form>
      </div>
  </div>
  </footer>
    )
}

export default Footer
