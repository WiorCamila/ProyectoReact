/* eslint-disable react/prop-types */
import { useState } from "react"

const ItemCount = ( {stock, inicial} ) =>{
    const [cantidad, setCantidad] = useState(inicial)

    const clickMenos = () =>{
        if(cantidad === 0){
            alert("No se puede seleccionar menos 1 producto.")
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
        
        <div>
            <button onClick={clickMenos}>-</button>
            <span>{cantidad}</span>
            <button onClick={clickMas}>+</button>
        </div>
    )
}

export default ItemCount; 