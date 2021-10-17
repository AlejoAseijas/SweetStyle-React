import { useContext } from "react";
import { Link } from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer";

const Item = ({ product }) => {
  return (
    <div key={product.id} className="card w-50 mt-5">
      <div className="card-header">{product.name}</div>
      <div className="card-body">
        <img src={product.img} alt="foto" />
      </div>
      <div className="card-footer">
        <Link to={`/detalle/${product.id}`}>
          <button className="btn btn-outline-primary btn-block">
            detalle de product
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
