
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'

function TopBar(props) {
  return (
    <>
       <Navbar className="bg-body-tertiary" id="nav">
        <Container>
          <Navbar.Brand id="name">{props.business_name}</Navbar.Brand>
        </Container>
         <Nav  variant="underline" defaultActiveKey="/home" >
      <Nav.Item>
        <Nav.Link href="/home">{props.link1}</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/">{props.link2}</Nav.Link>
      </Nav.Item>
      <Nav.Item>
         <Nav.Link eventKey="/">{props.link3}</Nav.Link>
      </Nav.Item>
    </Nav>
         </Navbar>

   
    </>
  );
}

export default TopBar;