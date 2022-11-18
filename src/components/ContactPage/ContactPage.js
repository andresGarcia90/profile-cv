import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Subtitle from "../UI/Subtitle/Subtitle";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import emailjs from 'emailjs-com';


const ContactPage = React.forwardRef((props, ref) => {

  const [validated, setValidated] = useState(false);
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('')


  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else {
      console.log(name);
      console.log(mail);
      console.log(subject);
      console.log(message);
      setValidated(true);
      // mailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'pk')
    }

  };

  return (
    <Container ref={ref}>
      <Row className="justify-content-md-center">
        <Subtitle text="Contact Me"></Subtitle>
      </Row>

      <Row className="justify-content-md-center">
        <Col>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row>
              <Form.Group className="mb-3" as={Col} md="6" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" required onChange={e => setName(e.target.value)} />
                <Form.Control.Feedback type="invalid">
                  Name Please.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                className="mb-3"
                as={Col}
                md="6"
                controlId="formEmail"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required onChange={e => setMail(e.target.value)} />
                <Form.Control.Feedback type="invalid">
                  Email Please.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formSubject">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="" onChange={e => setSubject(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                style={{ height: "100px" }}
                placeholder="Leave a comment here"
                onChange={e => setMessage(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col>asdasd</Col>
      </Row>
    </Container>
  );
});

export default ContactPage;
