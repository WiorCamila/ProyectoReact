import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';


const Contacto = () =>{



    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };


    return (
        <>

            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group  as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Meredith"
                        />
                        <Form.Control.Feedback>Correcto.</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Grey"
                        />
                        <Form.Control.Feedback>Correcto.</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="3" controlId="validationCustom03">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="MeredithGrey@gmail.com" required />
                        <Form.Control.Feedback type="invalid">
                            Por favor ingrese Email.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <FloatingLabel
                        controlId="floatingTextarea"
                        label="Comments"
                        className="mb-3"
                    >
                        <Form.Control as="textarea" placeholder="Leave a comment here" />
                    </FloatingLabel>
                </Row>
                <Form.Group className="mb-3">
                    <Form.Check
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                    />
                </Form.Group>
                <Button type="submit">Submit form</Button>
            </Form>
        </>
    )
}

export default Contacto; 