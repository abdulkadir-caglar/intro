import React, { Component } from 'react';
import Navi from './Navi';
import Category from './Category';
import Product from './Product';
import { Col, Container, Row } from 'reactstrap';

export default class App extends Component {
  state = {currentCategory: ""}

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
  }


  render() {
    let naviInfo = { title: "Navi Component" }
    let categoryInfo = { title: "Category List" };
    let productInfo = { title: "Product List" };

    return (
      <div>
        <Container>
          <Row>
            <Navi info={naviInfo} />
          </Row>

          <Row>
            <Col xs="3">
              <Category currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo} />
            </Col>

            <Col xs="9">
              <Product currentCategory={this.state.currentCategory} info={productInfo} />
            </Col>

          </Row>
        </Container>
      </div>
    );
  }
}