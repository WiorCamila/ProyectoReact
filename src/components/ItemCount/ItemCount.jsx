/* eslint-disable react/prop-types */
import { useState } from "react"
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import "../ItemCount/ItemCount.css"

const ItemCount = ( {stock, inicial, handleBuy} ) =>{
    const [cantidad, setCantidad] = useState(inicial)   
    const [itemAdd, setItemAdd] = useState (false)
    const navigate = useNavigate();

    const clickMenos = () =>{
        if(cantidad === 0){
            alert("Por favor seleccione 1 o más productos.")
            return
        }
        setCantidad(cantidad - 1)
    }

    const clickMas = () =>{
        if(cantidad === stock){
            alert("No hay más stock.")
            return
        }
        setCantidad(cantidad + 1)
    }

    const agregarAlCarrito = () =>{
        handleBuy(cantidad)
        setItemAdd(true)
    }

    const verElCarrito = () => {
        navigate("/cart")
        setItemAdd(false)
    }

    return (
        <>
            <div className="botonMasYMenos">
                <button id="botonMas"  type="button" className="btn btn-primary" onClick={clickMas}>+</button>
                <span id="cantidad">{cantidad}</span>
                <button id="botonMenos" type="button" className="btn btn-primary" onClick={clickMenos}>-</button>
            </div>
            <div id="botonesVerAndAgregar">
                {itemAdd ? (
                    <Button id="botonAVerCarrito" variant="primary" onClick={verElCarrito}>Ver el carrito</Button>
                ) : (
                    <Button id="botonAgregador" variant="primary" onClick={agregarAlCarrito}>Agregar al carrito</Button>
                )}

            </div>
        </>
    )
}

export default ItemCount; 