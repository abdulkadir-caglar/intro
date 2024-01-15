import React, { Component } from 'react';
import Navi from './Navi';
import Category from './Category';
import Product from './Product';
import { Col, Container, Row } from 'reactstrap';

export default class App extends Component {
  state = {currentCategory: "", products : []}

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  }

  componentDidMount(){
    this.getProducts();
  }

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";

    if(categoryId){
      url += "?categoryId=" + categoryId;
    }

    fetch(url)
    .then(response => response.json())
    .then(data => this.setState({products:data}))
  }

  render() {
    let naviInfo = { title: "Navi Component" }
    let categoryInfo = { title: "Category List" };
    let productInfo = { title: "Products" };

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
              <Product products = {this.state.products} currentCategory={this.state.currentCategory} info={productInfo} />
            </Col>

          </Row>
        </Container>
      </div>
    );
  }
}