import {Container, Col, Row} from 'react-bootstrap'

export default function Footer(){

    return(
        <div className='footer'>
<Container>
    <Row>
        <Col><strong>Brand Logo</strong></Col>
        <Col><ul><strong>Navigation</strong></ul></Col>
        <Col><ul><strong>Contact </strong></ul></Col>
    </Row>
    <Row>
        <Col>Su nombre</Col>
        <Col><ul><li>Home</li><li>Reviews</li><li>Services</li><li>Contact</li></ul></Col>
        <Col><ul><li>LinkedIn</li><li>Instragram</li></ul></Col>
    </Row>
</Container>
        </div>
    )
};