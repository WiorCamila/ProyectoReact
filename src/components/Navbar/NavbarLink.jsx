/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { NavLink } from "react-router-dom";
import "../Navbar/Navbar.css"

const NavbarLink = ({category}) =>{
    return(
        <>
            <NavLink to={`/categorias/${category}`} href="#" className="navbarContainer">{category}</NavLink>

        </>

    )
}

export default NavbarLink;