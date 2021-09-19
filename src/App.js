import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import ItemList from "./components/ItemList"
import Footer from "./components/Footer"
import Cart from "./components/Cart"
import ItemDetailContainer from './components/ItemDetailContainer'
import Contact from "./components/Contact"



function App() {
  return (
    <>
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
    </>
  )
}

export default App

/*
 
*/