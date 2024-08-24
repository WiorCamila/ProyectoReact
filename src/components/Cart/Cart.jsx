import { useState } from "react";
import { useCartContext } from "../../Context/CartContext";
import Table from 'react-bootstrap/Table';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../Firebase/dbConnection";

import "../Cart/cart.css"

//BOOSTRAP
//import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


const Cart = () =>{

    const [formularioData, setFormularioData] = useState({name:"", apellido:"", tel:"", email:""})

    const { carrito, total, removeCarrito, clearCarrito } = useCartContext()

    const handlerRemoveCarrito = (id, precio, qty) =>{
        removeCarrito(id, precio, qty)
    }
    const botonClearCarrito = () =>{
        clearCarrito()
    }

    const botonesChange = (e) => {
        setFormularioData({...formularioData, [e.target.name]: e.target.value})
    }

    const BotonGuardarCarrito = () => {
        console.log("Saving in dataBase")
        console.log("formularioData", formularioData)
        console.log("Carrito: ", carrito)

        const orderCollection = collection(db, "Ordenes de pedidos")
        const nuevoOrder = {
            comprador: formularioData, 
            productos: carrito,
            fecha: new Date(), 
            total: total,
            
        }

        addDoc(orderCollection, nuevoOrder)
        .then((doc) =>{
            alert("El orden de pedido es: " + doc.id)
            console.log("Orden de pedido grabado con id: " + doc.id)
            clearCarrito()
            setFormularioData({name:"", apellido:"", tel:"", email:""})
        })
        .catch((error) =>{
            console.log("error documento: ", error)
        })
    }

    return(
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                    </tr>
                </thead>
                <tbody>
                    {carrito?.map(({ id, name, precio, qty }, index) => {
                        return (
                            <tr key={index}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>$ {precio}</td>
                                <td>{qty}</td>
                                <td>
                                    <button onClick={() => handlerRemoveCarrito (id, precio, qty)}>Remove Items</button>
                                </td>
                            </tr>
                        )
                    })}
                    <tr>
                        <td colSpan={4}>Total precio</td>
                        <td>$ {total}</td>
                    </tr>
                </tbody>
            </Table>
            <div id="botonclear">
                <Button variant="outline-secondary" onClick={botonClearCarrito}>Clear Items</Button>
            </div>

            <Form id="formulario">
                <Row>
                    <Form.Group className="col-5" onChange={(e) => botonesChange(e)}>
                        <Form.Label>Nombre</Form.Label>
                            <Form.Control name="name" id="name" type="text" placeholder="Ingrese su Nombre"/>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="col-5"  onChange={(e) => botonesChange(e)}>
                        <Form.Label>Apellido</Form.Label>
                            <Form.Control type="text" name="apellido" id="apellido" placeholder="Ingrese su Apellido"/>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="col-5"  onChange={(e) => botonesChange(e)}>
                        <Form.Label>Telefono</Form.Label>
                            <Form.Control type="number" name="tel" id="tel" placeholder="Ingrese su Telefono"/>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="col-5"  onChange={(e) => botonesChange(e)}>
                        <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" id="email" placeholder="Ingrese su Email"/>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    
                </Row>
            </Form>
            <button onClick={BotonGuardarCarrito}>Finalizar Compra</button>
        </>
    )
}

export default Cart;
{/**/}


{/*<Form>
<Row className="mb-3">
    <Form.Group as={Col} md="4"  onChange={(e) => botonesChange(e)}>
        <Form.Label>First name</Form.Label>
            <Form.Control name="name" id="name" type="text" placeholder="Ingrese su Nombre"/>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
    </Form.Group>

    <Form.Group as={Col} md="4" onChange={(e) => botonesChange(e)}>
        <Form.Label>Last name</Form.Label>
            <Form.Control type="number" name="tel" id="tel" placeholder="Ingrese su Nombre"/>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
    </Form.Group>

    <Form.Group as={Col} md="4" onChange={(e) => botonesChange(e)}>
        <Form.Label>Last name</Form.Label>
            <Form.Control type="email" name="email" id="email" placeholder="Ingrese su Email"/>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
    </Form.Group>
    
</Row>
</Form>
<button onClick={BotonGuardarCarrito}>Finalizar Compra</button>*/}

{/*
            <input type="text" name="name" id="name" placeholder="Ingrese su Nombre" onChange={(e) => botonesChange(e)}/>
            <input type="number" name="tel" id="tel" placeholder="Ingrese su Telefono" onChange={(e) => botonesChange(e)}/>
            <input type="email" name="email" id="email" placeholder="Ingrese su Email" onChange={(e) => botonesChange(e)}/>
            <button onClick={BotonGuardarCarrito}>Finalizar Compra</button>
    
    
*/}