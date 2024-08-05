import './App.css';
import AboutUs from './components/AboutUs/AboutUs.jsx';
import Contacto from './components/Contacto/Contacto.jsx'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';
import Error404 from './components/Error404/Error404.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';


function App() {

  return (
    <>
      <BrowserRouter>
          <div className="navbar-imagen">
            <img src="https://binahdeco.com.ar/cdn/shop/files/binah-logo.svg?v=1695153268&width=140" alt="" />
          </div>
        <Layout>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/Categorias/:categoriasDeId" element={<ItemListContainer />}/>
            <Route path="/Producto/:id" element={<ItemDetailContainer />}/>
            <Route path="/About" element={<AboutUs />}/>
            <Route path="/Contacto" element={<Contacto />}/>
            <Route path="*" element={<Error404 />}/>
          </Routes>
        </Layout>
      </BrowserRouter>
      {/* <Navbar categorias={categorias} /> */ }
    </>
  )
}

export default App;
