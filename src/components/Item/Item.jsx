/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import "../Item/Item.css"

const Item = ({products}) =>{
    products.isStar = true
    
    return( 
        <>
            <div className="card-items">
                <Card id='card'>
                    <Card.Img variant="top" src={products.img} />
                    <div className='item-title'>
                        <h1>{products.name}</h1>
                        <p>${products.precio}</p>
                        <Link to={`/Producto/${products.id}`}>
                            <Button variant="primary" className='buttom'>Ver detalles</Button>
                        </Link>
                    </div>
                </Card>
            </div>
        </>
    )
}

export default Item;