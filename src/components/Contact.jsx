import React from 'react'

function Contact() {
    return (
        <div className="formulario">
        <form className="row g-3" id="myForm">
            <div className="col-md-6">
              <label for="inputNamel4" className="form-label">Nombre</label>
              <input type="text" className="form-control" id="inputName14" placeholder="Alejo"/>
            </div>
            <div className="col-md-6">
              <label for="inputLastName4" className="form-label">Apellido</label>
              <input type="text" className="form-control" id="inputLastName4" placeholder="Aseijas"/>
            </div>
            <div className="col-12">
              <label for="inputEmail" className="form-label">Email</label>
              <input type="email" className="form-control" id="inputEmail" placeholder="alejo@gmail.com"/>
            </div>
            <div className="col-12">
              <label for="inputPhoneNumber" className="form-label">Celular</label>
              <input type="text" className="form-control" id="inputPhoneNumber" placeholder="1138785999"/>
            </div>
            <div className="col-12">
              <label for="inputState" className="form-label">Motivo</label>
              <select id="inputState" className="form-select">
                <option>Seleccione una opcion</option>
                <option>Cambios</option>
                <option>Error al comprar</option>
                <option>Pedidos especiales</option>
                <option>Ventas por mayor</option>
                <option>Otros</option>
              </select>
            </div>
            <div className="mb-3">
              <label for="consulta" className="form-label">Escriba el motivo de su consulta</label>
              <textarea className="form-control" id="message" rows="4" placeholder='Ingrese su consulta'></textarea>
            </div>
            <div className="col-12">
              <button type="submit" id="btnSend" className="btn btn-primary">Enviar</button>
            </div>
          </form>
          </div>
    )
}

export default Contact
