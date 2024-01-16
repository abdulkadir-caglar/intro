import React, { Component } from 'react';
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
                                    {cartItem.product.productName}
                                    <Badge color = "success">{cartItem.quantity}</Badge>
                                </DropdownItem>
                            ))}
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