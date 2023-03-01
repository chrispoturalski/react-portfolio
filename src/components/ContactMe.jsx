import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function ContactMe() {
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
    <h1 id="contact">Message Me</h1>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3 justify-content-center">
        <Form.Group as={Col} md="8" controlId="validationCustom01">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
            required
            type="text"
            placeholder="John Doe"
            />
            <Form.Control.Feedback type="invalid">
                Please enter your full name.
            </Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row className="mb-3 justify-content-center">
        <Form.Group as={Col} md="8" controlId="validationCustomUsername">
            <Form.Label>Email</Form.Label>
            <InputGroup hasValidation>
            <Form.Control
                type="text"
                placeholder="Email Address"
                aria-describedby="inputGroupPrepend"
                required
            />
            <Form.Control.Feedback type="invalid">
                Please enter your email address.
            </Form.Control.Feedback>
            </InputGroup>
        </Form.Group>
        </Row>
        <Row className="mb-3 justify-content-center">
            <Form.Group as={Col} md="8" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3}
                required
                type="text"
                placeholder="Enter your message here." 
                />
                <Form.Control.Feedback type="invalid">
                    Please enter your message.
                </Form.Control.Feedback>
            </Form.Group>
        </Row>
      
      <Button type="submit">Submit Message</Button>
    </Form>
    </>
    )
}

export default ContactMe;