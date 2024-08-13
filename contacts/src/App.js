import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ContactForm from './component/ContactForm';
import ContactList from './component/ContactList';

function App() {
  return (
    <div>
      <h1 className='title'>Contacts</h1>
      <Container>
        <Row className='row-gap'>
          <Col lg={3}>
            <div className='form-area'>
              <ContactForm />
            </div>
          </Col>
          <Col lg={9}>
            <div className='list-area'>
              <ContactList />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
