import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../services/getFirebase";
import ItemList from "./ItemList";
import "../styles/itemListContainer.scss";

function ItemListContainer({ greeting }) {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const { idCategory } = useParams();

  useEffect(() => {
    const dbQuery = getFirestore();

    dbQuery
      .collection("home")
      .get()
      .then((resp) => {
        setProduct(resp.docs.map((item) => ({ id: item.id, ...item.data() })));
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [idCategory]);

  return (
    <div className="container" id="itemListC">
      <h1> {greeting}</h1>
      {loading ? <h2>Cargando...</h2> : <ItemList data={product} />}
    </div>
  );
}

export default ItemListContainer;
