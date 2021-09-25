import React,{useState,useContext} from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import ItemList from "./components/ItemList"
import Footer from "./components/Footer"
import Cart from "./components/Cart"
import ItemDetailContainer from './components/ItemDetailContainer'
import Contact from "./components/Contact"
import { cart_contex } from "./context/cartContext"


function App() {
  const cart_contex = useContext([])
  console.log(cart_contex);
  return (
    <>
    <cart_contex.Provider>
      <Router>
      <NavBar/>
        <Switch>
          <Route exact path='/'>
            <main> <div id='publicaciones'> <ItemList></ItemList> </div> </main>
          </Route>
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/category/:idCategory'> 
          <main> <div id='publicaciones'> <ItemList></ItemList> </div> </main>
          </Route>
          <Route exact path='/item/:id' component={ItemDetailContainer} ></Route>
          <Route exact path='/category/contacto' component={Contact}></Route>
        </Switch>
      <Footer/>
      </Router>
    </cart_contex.Provider>
    </>
  )
}

export default App

/*
 
*/