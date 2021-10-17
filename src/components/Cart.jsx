import { Link } from "react-router-dom";
import { useCartContext } from "../context/cartContext";

const Cart = ({ condition = true }) => {
  const { cartList, vaciarCarrito, deleteFromCart } = useCartContext();
  return (
    <div>
      {cartList.length === 0 ? (
        <div>
          <h1>No hay productos agregue algunos</h1>
          <Link to="/">Ir a Comprar</Link>
        </div>
      ) : (
        <div>
          {cartList.map((resp) =>
            resp.item.map((data) => {
              return (
                <div key={data.id}>
                  <h2>{data.name}</h2>
                  <img src={data.img} alt="" />
                  <button onClick={() => deleteFromCart(data.id)}> X </button>
                </div>
              );
            })
          )}
          <button onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
