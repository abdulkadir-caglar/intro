import React, { Component } from 'react';
import Navi from './Navi';
import Category from './Category';
import Product from './Product';
import { Col, Container, Row } from 'reactstrap';
import alertify from 'alertifyjs';
import { Route, Routes } from 'react-router-dom';
import NotFound from './NotFound';
import CartList from './CartList';
import FormDemo1 from './FormDemo1';

export default class App extends Component {
  state = { currentCategory: "", products: [], cart: [] }

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";

    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }

    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ products: data }))
  }

  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find(c => c.product.id === product.id)
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newCart })
    alertify.success(product.productName + " added to cart.", 1)
  }
  removeFromCart = (product) => {
    let newCart = this.state.cart.filter(c => c.product.id !== product.id)
    this.setState({ cart: newCart })
    alertify.error(product.productName + " removed from cart.")
  }

  render() {
    let naviInfo = { title: "Navi Component" }
    let categoryInfo = { title: "Category List" };
    let productInfo = { title: "Products" };

    return (
      <div>
        <Container>
          <Navi info={naviInfo} cart={this.state.cart} removeFromCart={this.removeFromCart} />

          <Row>
            <Col xs="3">
              <Category currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo} />
            </Col>

            <Col xs="9">
              <Routes>
                <Route path="/" element={ 
                  <Product
                    products={this.state.products}
                    addToCart={this.addToCart}
                    currentCategory={this.state.currentCategory}
                    info={productInfo}
                  />
                }
                />
                <Route exact path="/cart" element={<CartList 
                  cart= {this.state.cart}
                  removeFromCart= {this.removeFromCart}
                />} />
                <Route path= "*" element={<NotFound />} />
                <Route path="/form1" element={<FormDemo1/>}/>
              </Routes>

            </Col>

          </Row>
        </Container>
      </div>
    );
  }
}