import { useState, createContext, useContext } from "react";
const cartContext = createContext();

export const useCartContext = () => useContext(cartContext);

export const CartContext = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const agregarItem = (item, cantidad) => {
    let products = {
      itemPro: item,
      quantity: cantidad,
    };
    setCartList([...cartList, products]);
    console.log(cartList, "ok");
  };

  const deleteFromCart = (id) => {
    //const deleteProduct = cartList.filter((prod) => prod.item.id !== id);
    // setCartList([deleteProduct]);
    console.log("borrar");
  };

  const iconCart = () => {
    return cartList.reduce((acum, valor) => acum + valor.quantity, 0);
  };

  const precioTotal = () => {
    return cartList.reduce(
      (acum, valor) => acum + valor.quantity * valor.item.price,
      0
    );
  };

  const vaciarCarrito = () => {
    setCartList([]);
  };

  return (
    <cartContext.Provider
      value={{
        cartList,
        agregarItem,
        vaciarCarrito,
        iconCart,
        deleteFromCart,
        precioTotal,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
