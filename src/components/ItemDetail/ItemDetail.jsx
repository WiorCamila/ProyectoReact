/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../ItemDetail/ItemDetail.css"

const ItemDetail = ({product}) => {
   const {name, description, precio, stock, img} = product
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
                        <Button variant="primary">Comprar</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">Solo quedan: {stock}</Card.Footer>
                </Card>

            </div>
        </>
    )
}

export default ItemDetail;

