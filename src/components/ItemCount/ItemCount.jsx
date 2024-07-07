/* eslint-disable react/prop-types */
import { useState } from "react"
import "../ItemCount/ItemCount.css"

const ItemCount = ( {stock, inicial} ) =>{
    const [cantidad, setCantidad] = useState(inicial)

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

    return (
        
        <div className="botonMasYMenos">
            <button type="button" className="btn btn-primary" onClick={clickMenos}>-</button>
            <span>{cantidad}</span>
            <button type="button" className="btn btn-primary" onClick={clickMas}>+</button>
        </div>
    )
}

export default ItemCount; 