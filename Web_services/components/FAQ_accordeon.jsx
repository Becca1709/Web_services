import Accordion from 'react-bootstrap/Accordion';

function FAQ_acc( props ) {
  

  return (
    <Accordion className='accordion'>
     {props.questions?.map((item, index) => (
        <Accordion.Item key={index} eventKey={item.eventkey}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>
            {item.body}
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export default FAQ_acc;