import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, ButtonGroup,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    NavItem,
    NavLink,
    UncontrolledDropdown
} from 'reactstrap';

export default class CartSummary extends Component {
    renderSummary(){
        return(
            <div>
                    <UncontrolledDropdown>
                        <DropdownToggle caret>
                            Products
                        </DropdownToggle>
                        <DropdownMenu>
                            {this.props.cart.map(cartItem =>(
                                <DropdownItem key={cartItem.product.id}>
                                    <Badge color= "danger" onClick={() => this.props.removeFromCart(cartItem.product)}>X</Badge>
                                    {cartItem.product.productName}
                                    <Badge color = "success">{cartItem.quantity}</Badge>
                                </DropdownItem>
                            ))}
                            <DropdownItem>
                                <Link to="cart">Go To Cart</Link>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
            </div>
        )
    }

    renderEmptyCart(){
        return(
            <NavItem>
                <NavLink>Empty Cart</NavLink>
            </NavItem>
        )
    }

    render() {
        return (
           <div>
                {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmptyCart()}
           </div> 
        )
    }
}