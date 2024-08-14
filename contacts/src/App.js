import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ContactForm from './component/ContactForm';
import ContactList from './component/ContactList';
import titleIcon from './asset/contacts.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  return (
    <div>
      <h1 className='title' onClick={() => window.location.reload()}>
        <span>Contacts</span>
        <img src={titleIcon} className="title-icon"/>
        </h1>
      <div className='title-desc'>타이틀을 클릭하면 입력한 데이터가 초기화됩니다.</div>
      <Container className="my-container">
        <Row className='row-gap'>
          <Col lg={5} md={5} className="mb-4">
            <div className='form-area'>
              <ContactForm />
            </div>
          </Col>
          <Col lg={7} md={7} className="mb-5">
            <div className='list-area'>
              <ContactList />
            </div>
          </Col>
        </Row>
        <Row>
          <footer>© seongyurim, August 2024</footer>
        </Row>
      </Container>
    </div>
  );
}

export default App;
