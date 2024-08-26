/* eslint-disable react/prop-types */
import { useState } from "react"
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"
import "../ItemCount/ItemCount.css"

const ItemCount = ({stock, inicial, handleBuy}) =>{
    const navigate = useNavigate();
    const [qty, setQty] = useState(inicial)   
    const [itemAdd, setItemAdd] = useState (false)

    const clickMenos = () =>{
        if(qty === 1){
            Swal.fire({
                title: "No se puede selecionar menos de 1 producto.",
                icon: "error"
            });
            return
        }
        setQty(qty - 0)
    }

    const clickMas = () =>{
        if(qty === stock){
            Swal.fire({
                title: "No hay más stock.",
                icon: "error"
            });
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
                <div id="botonVerElCarrito">
                    <Button variant="primary" onClick={verElCarrito}>Ver el carrito</Button>

                </div>
                ) : (
                    <>
                        <div className="botonMasYMenos">
                            <button id="botonMas"  type="button" className="btn btn-primary" onClick={clickMas}>+</button>
                            <span id="cantidad">{qty}</span>
                            <button id="botonMenos" type="button" className="btn btn-primary" onClick={clickMenos}>-</button>
                        </div>
                        <div id="botonAgregador">
                            <Button variant="primary" onClick={agregarAlCarrito}>Agregar al carrito</Button>
                        </div>
                    </>
            )}
        </>
    )
}

export default ItemCount; 