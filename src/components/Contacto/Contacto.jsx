import { useState } from "react";
import { db } from "../../Firebase/dbConnection";
import { collection, addDoc } from "firebase/firestore";
import { useCartContext } from "../../Context/CartContext";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Contacto.css'

const Contacto = () => {
    const [formularioContact, setFormularioContact] = useState({ name: "", tel: "", email: "", mensaje: "" });
    const { clearCarrito } = useCartContext();

    const botonesChange2 = (e) => {
        setFormularioContact({ ...formularioContact, [e.target.name]: e.target.value });
    };

    const finalizarElContact = () => {
        console.log("formularioData", formularioContact);

        const contactCollection = collection(db, "Mensaje de Contact");
        const nuevoContact = {
            mensaje: formularioContact,
        };

        addDoc(contactCollection, nuevoContact)
            .then((doc) => {
                alert("Tu mensaje se ha generado con la orden: " + doc.id);
                clearCarrito();
                setFormularioContact({ name: "", tel: "", email: "", mensaje: "" });
            })
            .catch((error) => {
                console.log("Error al guardar el documento: ", error);
            });
    };

    return (
        <div className="contact-form-container">
            <Card className="contact-card mx-auto mt-5">
                <Card.Body>
                    <Card.Title className="text-center mb-4">Contacto</Card.Title>
                    <Form id="formulario">
                        <Row>
                            <Form.Group className="col-12 mb-3">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    name="name"
                                    type="text"
                                    placeholder="Ingrese su Nombre"
                                    onChange={botonesChange2}
                                    value={formularioContact.name}
                                    className="rounded-pill"
                                />
                            </Form.Group>

                            <Form.Group className="col-12 mb-3">
                                <Form.Label>Teléfono</Form.Label>
                                <Form.Control
                                    name="tel"
                                    type="number"
                                    placeholder="Ingrese su Teléfono"
                                    onChange={botonesChange2}
                                    value={formularioContact.tel}
                                    className="rounded-pill"
                                />
                            </Form.Group>

                            <Form.Group className="col-12 mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    name="email"
                                    type="email"
                                    placeholder="Ingrese su Email"
                                    onChange={botonesChange2}
                                    value={formularioContact.email}
                                    className="rounded-pill"
                                />
                            </Form.Group>

                            <Form.Group className="col-12 mb-4">
                                <Form.Label>Mensaje</Form.Label>
                                <Form.Control
                                    name="mensaje"
                                    as="textarea"
                                    rows={4}
                                    placeholder="Ingrese su Mensaje"
                                    onChange={botonesChange2}
                                    value={formularioContact.mensaje}
                                    className="rounded"
                                />
                            </Form.Group>
                        </Row>
                        <Button variant="primary" className="w-100 rounded-pill" onClick={finalizarElContact}>Enviar</Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Contacto;
