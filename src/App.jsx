import './App.css';
import AboutUs from './components/AboutUs/AboutUs.jsx';
import Contacto from './components/Contacto/Contacto.jsx';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';
import Error404 from './components/Error404/Error404.jsx';

function App() {
  const titulo = "Bienvenidos a Binah Deco."

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<ItemListContainer titulo={titulo} />}/>
            <Route path="/Home" element={<ItemListContainer titulo={titulo} />}/>
            <Route path="/Contact" element={<Contacto />}/>
            <Route path="/About" element={<AboutUs />}/>
            <Route path="*" element={<Error404 />}/>
          </Routes>
        </Layout>
      
      </BrowserRouter>
      {/* <Navbar categorias={categorias} /> */ }
    </>
  )
}

export default App;
