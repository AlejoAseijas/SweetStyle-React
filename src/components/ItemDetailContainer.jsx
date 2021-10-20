import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import ItemCount from "./ItemCount";
import { useCartContext } from "../context/cartContext";
import "../styles/itemDetail.scss";

const ItemDetailContainer = () => {
  const { agregarItem } = useCartContext();
  let location = useLocation();
  let path = location.pathname.split("e/");
  const [prod, setprod] = useState([]);

  useEffect(() => {
    let prodLocal = JSON.parse(localStorage.getItem("products"));
    setprod(prodLocal.filter((prod) => prod.id === path[1]));
  }, []);

  const onAdd = (cant) => {
    agregarItem(prod, cant);
  };

  return prod.map((data) => {
    return (
      <div className="container" id="item">
        <h2>{data.name}</h2>
        <img src={data.img} alt="foto" />
        <h2>{data.price} $</h2>
        <ItemCount initial={1} stock={data.stock} onAdd={onAdd} />
      </div>
    );
  });
};

export default ItemDetailContainer;
