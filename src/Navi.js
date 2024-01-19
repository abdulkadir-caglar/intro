import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import CartSummary from './CartSummary';
import { Link } from 'react-router-dom';

class Navi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div>
        <Navbar {...this.props}>
          <NavbarBrand href="/">Shopping</NavbarBrand>
          <h3>Product Count: {this.props.cart.length}</h3>
          <CartSummary cart ={this.props.cart} removeFromCart = {this.props.removeFromCart}/>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink href="https://github.com/abdulkadir-caglar">
                  GitHub
                </NavLink>
                <NavLink>
                  <Link to="form1">
                    Form Demo 1
                  </Link>
                </NavLink>
                
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navi;
