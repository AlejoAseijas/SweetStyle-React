import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import ItemList from "./components/ItemList"
import Footer from "./components/Footer"



function App() {
  return (
    <>
      <Router>
      <NavBar></NavBar>
      <main><div id='publicaciones'><ItemList></ItemList></div></main>
      <Footer></Footer>
      </Router>
    </>
  )
}

export default App
