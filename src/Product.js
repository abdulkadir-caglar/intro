import React, { Component } from "react";
import { Button, Table } from "reactstrap";

export default class Product extends Component {

    render() {
        return (
            <div>
                <h3>{this.props.currentCategory} {this.props.info.title}</h3>
                <Table>
                    <thead>
                        <tr>
                            <th>Product Id</th>
                            <th>Product Name</th>
                            <th> Price</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.products.map(product => (
                                <tr key={product.id}>
                                    <th scope="row">{product.id}</th>
                                    <td>{product.productName}</td>
                                    <td>{product.unitPrice} </td>
                                    <td> {product.unitsInStock} </td>
                                    <td><Button color="secondary"
                                    onClick={()=> this.props.addToCart(product)}>Add</Button></td>
                                </tr>
                            ))}
                    </tbody>
                </Table>
            </div>
        )
    }
}