/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemDetail = ({product}) => {
   const {name, description, precio, stock, img} = product
    return(
        <>
            <Card className="text-center">
                <Card.Header>{name}</Card.Header>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>${precio}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="primary">Comprar</Button>
                </Card.Body>
                <Card.Footer className="text-muted">Solo quedan {stock}</Card.Footer>
            </Card>
        </>
    )
}

export default ItemDetail;

