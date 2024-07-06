import './App.css';
import Navbar from "./components/Navbar/Navbar.jsx"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx"
import { categorias } from "./components/Mock/SimulatorData.js"

function App() {
  const titulo = "Bienvenidos a Binah Deco."

  return (
    <>
      <Navbar categorias={categorias} />
      <ItemListContainer titulo={titulo} />
    </>
  )
}

export default App;
