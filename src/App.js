import { useState, createContext } from "react";

import { NavBar } from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import Cart from "./components/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { CartContext } from "./context/cartContext";
import Footer from "./components/Footer";
export const ContextApp = createContext("Fede"); //se crea una sola vez

export default function App() {
  const [state, setState] = useState("load");

  function states() {
    alert(state);
  }

  return (
    <div>
      <CartContext>
        <ContextApp.Provider value={{ state, states }}>
          <Router>
            <NavBar />

            <Switch>
              <Route path="/" exact component={ItemListContainer} />

              <Route
                path="/category/:idCategory"
                exact
                component={ItemListContainer}
              />

              <Route
                path="/detalle/:idProducto"
                exact
                component={ItemDetailContainer}
              />

              <Route exact path="/cart">
                <Cart />
              </Route>
            </Switch>
            <Footer />
          </Router>
        </ContextApp.Provider>
      </CartContext>
    </div>
  );
}
