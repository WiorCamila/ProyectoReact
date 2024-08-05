/* eslint-disable react/prop-types */
import CartWidget from "../CartWidget/CartWidget";
import "../Navbar/Navbar.css"
import NavbarLink from "./NavbarLink";
import { categorias } from "../Mock/SimulatorData";

const Navbar = () =>{  



    return(
        <>
            <nav className="navbarContainer">
                {categorias.map((element, index) => {
                    return <NavbarLink key={index} category={element} />
                })}

            </nav>
            <CartWidget />

        </>
    )
}

export default Navbar;