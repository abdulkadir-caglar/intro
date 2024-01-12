import React from 'react';
import Navi from './Navi';
import Category from './Category';
import Product from './Product';
import { Col, Container, Row } from 'reactstrap';

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Navi />
        </Row>
        
        <Row>
          <Col xs="3">
          <Category />
          </Col>

          <Col xs="9">
          <Product />
          </Col>
          
        </Row>
      </Container>
    </div>
  );
}

export default App;
