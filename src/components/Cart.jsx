import { Link } from "react-router-dom";
import { useCartContext } from "../context/cartContext";
import "../styles/cart.scss";
import CheckOut from "./CheckOut";

const Cart = ({ condition = true }) => {
  const { cartList, vaciarCarrito, deleteFromCart } = useCartContext();
  return (
    <>
      {cartList.length === 0 ? (
        <div>
          <h1>No hay productos agregue algunos</h1>
          <Link to="/">Ir a Comprar</Link>
        </div>
      ) : (
        <>
          <div className="conatiner" id="conatinerProducts">
            {cartList.map((resp) =>
              resp.itemPro.map((data) => {
                return (
                  <div key={data.id} className="card w-25 m-2">
                    <h2>{data.name}</h2>
                    <img src={data.img} alt="" />
                    <h2 className="text-center"> Cantidad {resp.quantity}</h2>
                    <h2 className="text-center"> {data.price} $ </h2>
                    <button
                      data-id={data.id}
                      onClick={() => deleteFromCart(data.id)}
                    >
                      X
                    </button>
                  </div>
                );
              })
            )}
          </div>
          <button onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
          <CheckOut />
        </>
      )}
    </>
  );
};

export default Cart;
