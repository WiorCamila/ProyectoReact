import { useCartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css"


const CartWidget = () => {
    const { cantidadProductos } = useCartContext()
    return(
        <div className="navbarContainerLink">
            <Link to="/cart" className="imgContacto" >
                <img src="https://res.cloudinary.com/dejd638ze/image/upload/v1722885716/carrito-de-compras_xf2mzw.png" alt="" /> 
            </Link>
            <span id="numeroDeCarrito">{ cantidadProductos }</span>
        </div>
    )
}

export default CartWidget;