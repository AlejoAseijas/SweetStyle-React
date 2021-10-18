import { useContext } from "react";
import { Link } from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer";

const Item = ({ product }) => {
  return (
    <div key={product.id} className="card w-25" id="card">
      <div className="card-header text-center">{product.name}</div>
      <div className="card-body text-center">
        <img src={product.img} alt="foto" className="w-50" />
      </div>
      <div className="card-footer text-center">
        <Link to={`/detalle/${product.id}`}>
          <button className="btn btn-outline-primary btn-block">
            Detalle de product
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
