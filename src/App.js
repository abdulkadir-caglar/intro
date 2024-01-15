import React, { Component } from 'react';
import Navi from './Navi';
import Category from './Category';
import Product from './Product';
import {
  Col,
  Container,
  Row,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

export default class App extends Component {
  state = { currentCategory: "", products: [], cart:[]}

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

  addToCart = (product) =>{
    let newCart = this.state.cart;
    var addedItem = newCart.find(c => c.product.id === product.id)
    if(addedItem){
      addedItem.quantity += 1;
    }else{
      newCart.push({product:product , quantity:1});
    }
    this.setState({cart: newCart})
}

  render() {
    let naviInfo = { title: "Navi Component" }
    let categoryInfo = { title: "Category List" };
    let productInfo = { title: "Products" };

    return (
      <div>
        <Container>
          <Navi info={naviInfo} cart={this.state.cart} />

          <Row>
            <Col xs="3">
              <Category currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo} />
            </Col>

            <Col xs="9">
              <Product 
              products={this.state.products}
              addToCart = {this.addToCart} 
              currentCategory={this.state.currentCategory} 
              info={productInfo} />
            </Col>

          </Row>
        </Container>
      </div>
    );
  }
}