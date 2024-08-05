/* eslint-disable react/prop-types */
//import CartWidget from "../CartWidget/CartWidget";
import "../Navbar/Navbar.css"
import NavbarLink from "./NavbarLink";
import { categorias } from "../Mock/SimulatorData";
import { Link } from "react-router-dom";
//import Contacto from "../Contacto/Contacto.jsx"


const Navbar = () =>{  

    return(
        <>
            <nav>
                <div className="navbarContainer">
                    {categorias.map((element, index) => {
                        return <NavbarLink key={index} category={element} />
                    })}
                   
                </div>
                <div className="navbarContainerLink" >
                    <Link to="/Contacto" className="imgContacto">
                        <img src="https://res.cloudinary.com/dejd638ze/image/upload/v1722880400/contact_vx7xeo.png" alt="" />
                    </Link>
                    <Link to="/Carrito" className="imgCarrito">
                        <img src="https://res.cloudinary.com/dejd638ze/image/upload/v1722885716/carrito-de-compras_xf2mzw.png" alt="" />
                    </Link>
                </div>

            </nav>

        </>
    )
}

export default Navbar;