import Button from 'react-bootstrap/Button';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Placeholder from 'react-bootstrap/Placeholder';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';


function Review_Card(props) {
const [loading, SetLoading]=useState("true");
const starsArray = Array.from({ length: props.rating || 5 });

  return (
     <div className="d-flex justify-content-around">
        <Card> 
        <Card.Img variant="top"/>
        <Card.Body>
          <div className='rating-score'>
          {starsArray.map((_, index) => (
          <FontAwesomeIcon icon={faStar} style={{color: "rgb(255, 212, 59)",}} />
            ))}
            </div>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.text}
          </Card.Text>
        </Card.Body>
      </Card>
  </div>
      
  );
}

export default Review_Card;