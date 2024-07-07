/* eslint-disable react/prop-types */
import CartWidget from "../CartWidget/CartWidget.jsx"
import "../Navbar/navbar.css"

const Navbar = ( { categorias }) => {

    return (
        <>

            <nav className="navbar-expand-lg bg-body-tertiary">
                <div className="navbar-expand-lg bg-body-tertiary imagen-principal-binah">
                    <img src="https://binahdeco.com.ar/cdn/shop/files/binah-logo.svg?v=1695153268&width=140" />
                </div>
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="conteiner-navbar">
                        <div className="navbar-nav">
                            <a className="nav-link" href="#">{categorias[0]}</a> 
                            <a className="nav-link" href="#">{categorias[1]}</a>
                            <a className="nav-link" href="#">{categorias[2]}</a>
                            <a className="nav-link" href="#">{categorias[3]}</a>
                            <a className="nav-link" href="#">{categorias[4]}</a>
                            <a className="nav-link" href="#">{categorias[5]}</a>
                            <a className="nav-link" href="#">{categorias[6]}</a>
                        </div>
                        <CartWidget />
                    </div>
                </div>
            </nav>

            {/* <div>
                <h1>{titulo}</h1>
            </div>
            <div>
                <a href="#"> {categorias[0]}</a>
                <a href="#"> {categorias[1]}</a>
                <a href="#"> {categorias[2]}</a>
                <a href="#"> {categorias[3]}</a>
                <a href="#"> {categorias[4]}</a>
                <a href="#"> {categorias[5]}</a>
                <a href="#"> {categorias[6]}</a>
            </div> */}
            
        </>
    )
}

export default Navbar;