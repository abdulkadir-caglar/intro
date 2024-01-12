import React from 'react';
import Navi from './Navi';
import Category from './Category';
import Product from './Product';
import { Col, Container, Row } from 'reactstrap';

function App() {
  const naviInfo={title:"Navi Component"}
  const categoryInfo = {title:"Category List"};
  const productInfo = {title:"Product List"};

  return (
    <div>
      <Container>
        <Row>
          <Navi info={naviInfo}/>
        </Row>
        
        <Row>
          <Col xs="3">
          <Category info={categoryInfo}/>
          </Col>

          <Col xs="9">
          <Product info={productInfo}/>
          </Col>
          
        </Row>
      </Container>
    </div>
  );
}

export default App;
