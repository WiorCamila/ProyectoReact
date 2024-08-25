import { useState } from "react";
import { useCartContext } from "../../Context/CartContext";
import Table from 'react-bootstrap/Table';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../Firebase/dbConnection";
import "../Cart/cart.css";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const Cart = () => {
    const { cart, total, removeCarrito, clearCarrito } = useCartContext();
    const [formularioData, setFormularioData] = useState({ name: "", apellido: "", tel: "", email: "" });

    const handlerRemoveCarrito = (id, precio, qty) => {
        removeCarrito(id, precio, qty);
    };

    const botonClearCarrito = () => {
        clearCarrito();
    };

    const botonesChange = (e) => {
        setFormularioData({ ...formularioData, [e.target.name]: e.target.value });
    };

    const BotonGuardarCarrito = () => {
        if (!formularioData.name || !formularioData.apellido || !formularioData.tel || !formularioData.email) {
            alert("Por favor complete todos los campos");
            return;
        }

        const orderCollection = collection(db, "Ordenes de pedidos");
        const nuevoOrder = {
            comprador: formularioData,
            productos: cart,
            fecha: new Date(),
            total: total,
        };

        addDoc(orderCollection, nuevoOrder)
            .then((doc) => {
                alert("El orden de pedido es: " + doc.id);
                clearCarrito();
                setFormularioData({ name: "", apellido: "", tel: "", email: "" });
            })
            .catch((error) => {
                console.log("Error al guardar el documento: ", error);
            });
    };

    return (
        <>
            <Table striped bordered hover className="mb-4">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Subtotal</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(({ id, name, precio, qty }, index) => {
                        const subtotal = precio * qty;
                        return (
                            <tr key={index}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>$ {precio.toFixed(2)}</td>
                                <td>{qty}</td>
                                <td>$ {subtotal.toFixed(2)}</td>
                                <td>
                                    <Button variant="danger" onClick={() => handlerRemoveCarrito(id, precio, qty)}>Remove</Button>
                                </td>
                            </tr>
                        );
                    })}
                    <tr>
                        <td colSpan={4} style={{ textAlign: 'right', fontWeight: 'bold' }}>Total precio</td>
                        <td style={{ fontWeight: 'bold' }}>$ {total.toFixed(2)}</td>
                        <td>
                            <Button variant="outline-secondary" onClick={botonClearCarrito}>Clear Items</Button>
                        </td>
                    </tr>
                </tbody>
            </Table>

            <div className="form-container">
                <Form id="formulario">
                    <h3 className="mb-4">Información de Compra</h3>
                    <Row>
                        <Form.Group className="col-12 mb-3">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                name="name"
                                type="text"
                                placeholder="Ingrese su Nombre"
                                onChange={(e) => botonesChange(e)}
                                value={formularioData.name}
                            />
                        </Form.Group>

                        <Form.Group className="col-12 mb-3">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control
                                name="apellido"
                                type="text"
                                placeholder="Ingrese su Apellido"
                                onChange={(e) => botonesChange(e)}
                                value={formularioData.apellido}
                            />
                        </Form.Group>

                        <Form.Group className="col-12 mb-3">
                            <Form.Label>Teléfono</Form.Label>
                            <Form.Control
                                name="tel"
                                type="tel"
                                placeholder="Ingrese su Teléfono"
                                onChange={(e) => botonesChange(e)}
                                value={formularioData.tel}
                            />
                        </Form.Group>

                        <Form.Group className="col-12 mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                name="email"
                                type="email"
                                placeholder="Ingrese su Email"
                                onChange={(e) => botonesChange(e)}
                                value={formularioData.email}
                            />
                        </Form.Group>
                    </Row>
                    <Button variant="primary" onClick={BotonGuardarCarrito}>Finalizar Compra</Button>
                </Form>
            </div>
        </>
    );
};

export default Cart;
