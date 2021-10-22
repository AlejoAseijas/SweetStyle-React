import React, { useState } from "react";
import { useCartContext } from "../context/cartContext";
import "../styles/checkOut.scss";
import firebase from "firebase/app";
import { getFirestore } from "../services/getFirebase";

function CheckOut() {
  const { cartList } = useCartContext();
  let precioFinal = 0;
  const [name, setName] = useState("");
  const [product, setProduct] = useState([]);
  const [email, setEmail] = useState("");
  const [conEmail, setConEmail] = useState("");
  const [number, setNumber] = useState("");
  const [orderId, setOrderId] = useState("");

  cartList.map((item) => {
    precioFinal += item.quantity * item.itemPro[0].price;
    setProduct([...product, item.itemPro[0]]);
    return console.log(precioFinal);
  });

  const onNameChange = (evento) => {
    setName(evento.target.value);
  };
  const onEmailChange = (evento) => {
    setEmail(evento.target.value);
  };
  const confonEmailChange = (evento) => {
    setConEmail(evento.target.value);
  };
  const numberChange = (evento) => {
    setNumber(evento.target.value);
  };

  const addOrder = () => {
    const db = getFirestore();
    const orders = db.collection("orders");

    const buyer = { name, email, conEmail };
    const items = product;

    const newOrder = {
      buyer,
      items,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total: precioFinal,
    };

    orders
      .add(newOrder)
      .then(({ id }) => {
        setOrderId(id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h1>Valor total de la compra: {precioFinal} $</h1>
      <form className="form margin-bottom-300px">
        <div className="form-group d-flex">
          <label className="text-start">nombre</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={onNameChange}
            placeholder="Nombre y Apellido"
          />
        </div>
        <div className="form-group d-flex">
          <label className="text-start">email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onEmailChange}
            placeholder="mail@ejemplo.com"
          />
        </div>
        <div className="form-group d-flex">
          <label className="text-start"> confirma tu email</label>
          <input
            type="email"
            name="conEmail"
            value={conEmail}
            onChange={confonEmailChange}
            placeholder="mail@ejemplo.com"
          />
        </div>
        <div className="form-group d-flex">
          <label className="text-start"> Telefono</label>
          <input
            type="number"
            name="number"
            value={number}
            placeholder="1138785999"
            onChange={numberChange}
          />

          <button onClick={addOrder}> Confirmar </button>
        </div>
      </form>
    </>
  );
}

export default CheckOut;
