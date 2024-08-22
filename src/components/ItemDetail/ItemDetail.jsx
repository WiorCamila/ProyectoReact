/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import Card from 'react-bootstrap/Card';
import "../ItemDetail/ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount.jsx"
import { useCartContext } from '../../Context/CartContext.jsx';

const ItemDetail = ({id, name, description, precio, stock, img}) => {
    
    const {agregarAlCarrito} = useCartContext()


    // QTY = CANTIDAD DE PRODUCTOS
    const handleBuy = (cantidad) =>{ 
        const productos = {id, name, description, precio}
        agregarAlCarrito(productos, cantidad)
    }
    return(
        <>

            <div className="d-flex justify-content-md-center p-4" id='container'>
                <img src={img} alt="" />
                <div className="card  max-width: 180px;" id='card-div'>
                    <div className="col-md-8">
                        <h1>{name}</h1>
                    </div>
                    <div className="col-md-8" id='card-text'>
                        <p>{description}</p>
                        <p>${precio}</p>
                    </div>
                    <ItemCount stock={stock} inicial={1} handleBuy={handleBuy} />
                    <Card.Footer className="text-muted">Solo quedan: {stock} </Card.Footer>
                </div>
            </div>
        </>
    )
}

export default ItemDetail;