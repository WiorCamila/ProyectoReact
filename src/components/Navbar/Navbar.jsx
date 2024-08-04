/* eslint-disable react/prop-types */
import CartWidget from "../CartWidget/CartWidget";
import "../Navbar/Navbar.css"
import NavbarLink from "./NavbarLink";
import { categorias } from "../Mock/SimulatorData";

const Navbar = () =>{  



    return(
        <>
            <div className="navbar-imagen">
                <img src="https://binahdeco.com.ar/cdn/shop/files/binah-logo.svg?v=1695153268&width=140" />
            </div>
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