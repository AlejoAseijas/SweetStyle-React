import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import ItemListContainer from './components/ItemListContainer'
import Item from "./components/Item"



function App() {
  return (
    <div>
      <Router>
      <NavBar></NavBar>
      <ItemListContainer></ItemListContainer>
      </Router>
    </div>
  )
}

export default App
