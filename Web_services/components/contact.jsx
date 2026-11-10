import { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'


export function ContactMe() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents page reload
    setIsSubmitting(true);
  }
     if (isSuccess) {
    return (
      <div className="success-card">
        <h2>🎉 Thank you!</h2>
        <p>Your submission has been received successfully.</p>
      </div>
    );
  }

  return (
    <Form
    name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}
    data-netlify-honeypot="bot-field"
    >
      <input class="d-none" name="bot-field"></input>
      <Form.Group className='mb-3'>
        <Form.Label>Nombre</Form.Label>
        <Form.Control aria-label="Nombre" name="name" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" name="email" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Escribe tu mensaje aqui.</Form.Label>
        <Form.Control as="textarea" rows={3} name="message" required />
      </Form.Group>
      <Button type="submit" variant="primary" disabled={isSubmitting}  >{isSubmitting ? 'Enviando...' : 'Enviar'}</Button>
    </Form>
  );
}

