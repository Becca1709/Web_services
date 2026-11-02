import Accordion from 'react-bootstrap/Accordion';

function FAQ_acc( props ) {
const questions =[{eventkey:"0", header:"Question 1", body:"blah blah"}, {eventkey:"1", header:"Question 2", body:"bleh bleh"}, {eventkey:"2", header:"Question 3", body:"bleh bleh bleh"}]

  return (
    <Accordion className='accordion'>
     {questions.map((item, index) => (
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