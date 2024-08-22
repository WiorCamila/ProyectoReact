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
        console.log(`Se agregaron ${cantidad} productos al Carrito`)
        
        const productos = {id, name, description, precio}
        agregarAlCarrito(productos, cantidad)
    }
    return(
        <>
            <div className="container">
                <Card className="text-center" style={{ width: '20rem'}}>
                    <Card.Header>{name}</Card.Header>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>${precio}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <ItemCount stock={stock} inicial={1} handleBuy={handleBuy} />
                        
                    </Card.Body>
                    <Card.Footer className="text-muted">Solo quedan: {stock} </Card.Footer>
                </Card>

            </div>
        </>
    )
}

export default ItemDetail;

