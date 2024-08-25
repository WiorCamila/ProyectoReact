/* eslint-disable react/prop-types */
//import CartWidget from "../CartWidget/CartWidget";
import "../Navbar/Navbar.css"
import NavbarLink from "./NavbarLink";
import { categorias } from "../Mock/SimulatorData";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

//import { NavLink } from "react-router-dom";

const Navbar = () =>{  

    return(
        <>

            <nav>
                
                <div className="navbarContainer">
                    {categorias.map((element, index) => {
                        return <NavbarLink key={index} category={element} />
                    })}

                    <div className="navbarContainerLink" >
                        <Link to="/Contacto" className="imgContacto">
                            <img src="https://res.cloudinary.com/dejd638ze/image/upload/v1722880400/contact_vx7xeo.png" alt="" />
                        </Link>
                        <CartWidget />
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar;