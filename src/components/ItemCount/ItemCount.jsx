/* eslint-disable react/prop-types */
import { useState } from "react"
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

import "../ItemCount/ItemCount.css"

const ItemCount = ({stock, inicial, handleBuy}) =>{
    const navigate = useNavigate();
    const [qty, setQty] = useState(inicial)   
    const [itemAdd, setItemAdd] = useState (false)

    const clickMenos = () =>{
        if(qty === 0){
            alert("Por favor seleccione 1 o más productos.")
            return
        }
        setQty(qty - 1)
    }

    const clickMas = () =>{
        if(qty === stock){
            alert("No hay más stock.")
            return
        }
        setQty(qty + 1)
    }

    const agregarAlCarrito = () =>{
        handleBuy(qty)
        setItemAdd(true)
    }

    const verElCarrito = () => {
        setItemAdd(false)
        navigate("/cart")
    }


    return (
        <>
            {itemAdd ? (
                <Button id="botonAVerCarrito" variant="primary" onClick={verElCarrito}>Ver el carrito</Button>
                ) : (
                    <>
                        <div className="botonMasYMenos">
                            <button id="botonMas"  type="button" className="btn btn-primary" onClick={clickMas}>+</button>
                            <span id="cantidad">{qty}</span>
                            <button id="botonMenos" type="button" className="btn btn-primary" onClick={clickMenos}>-</button>
                        </div>
                        <Button id="botonAgregador" variant="primary" onClick={agregarAlCarrito}>Agregar al carrito</Button>
                    </>
            )}
        </>
    )
}

export default ItemCount; 