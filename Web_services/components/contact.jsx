import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

function ContactMe() {
  return (
    <Form>
      <Form.Group className='mb-3'>
        <Form.Label>Nombre</Form.Label>
        <Form.Control aria-label="Nombre"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Escribe tu mensaje aqui.</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button type="submit" variant="primary">Enviar</Button>
    </Form>
  );
}

export default ContactMe;