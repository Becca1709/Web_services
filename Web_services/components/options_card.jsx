import Card from 'react-bootstrap/Card';

function Opt_Cards(props) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.sub}</Card.Subtitle>
        <Card.Subtitle className="mb-2">{props.price}</Card.Subtitle>
        <Card.Text>
      {props.text}
        </Card.Text>
        <Card.Link href="#">Más información</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Opt_Cards;