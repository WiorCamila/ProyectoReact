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

                    <Link to="/Contacto" className="imgContacto">
                        <img src="https://res.cloudinary.com/dejd638ze/image/upload/v1722880400/contact_vx7xeo.png" alt="" />
                    </Link>
                </div>


            </nav>


            

        </>
    )
}

export default Navbar;