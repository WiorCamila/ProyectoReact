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
                <button type="button" className="btn btn-primary" onClick={clickMenos}>-</button>
                <span>{cantidad}</span>
                <button type="button" className="btn btn-primary" onClick={clickMas}>+</button>
            </div>
            {itemAdd ? (
                <Button variant="primary" onClick={verElCarrito}>Ver el carrito</Button>
            ) : (
                <Button variant="primary" onClick={agregarAlCarrito}>Agregar al carrito</Button>
            )}
        </>
    )
}

export default ItemCount; 