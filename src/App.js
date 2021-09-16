import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import ItemList from "./components/ItemList"



function App() {
  return (
    <>
      <Router>
      <NavBar></NavBar>
      <main><div id='publicaciones'><ItemList></ItemList></div></main>
      </Router>
    </>
  )
}

export default App
