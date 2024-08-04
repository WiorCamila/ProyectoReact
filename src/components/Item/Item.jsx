/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import "../Item/Item.css"


const Item = ({products}) =>{

    return( 
        <>
            <div className="card-items">
                <Card >
                    <Card.Img variant="top" src={products.img} />
                    <Card.Body >
                        <Card.Title>{products.name}</Card.Title>

                        <Card.Text>${products.precio}</Card.Text>
                        <Link to={`/Producto/${products.id}`}>
                            <Button variant="primary">Ver detalles</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default Item;