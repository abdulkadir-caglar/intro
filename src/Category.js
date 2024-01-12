import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class Category extends Component {
    render() {
        return (
            <div>
                <h2>Category List</h2>
                <ListGroup>
                    <ListGroupItem>
                        Cras justo odio
                    </ListGroupItem>
                    <ListGroupItem>
                        Dapibus ac facilisis in
                    </ListGroupItem>
                    <ListGroupItem>
                        Morbi leo risus
                    </ListGroupItem>
                    <ListGroupItem>
                        Porta ac consectetur ac
                    </ListGroupItem>
                    <ListGroupItem>
                        Vestibulum at eros
                    </ListGroupItem>
                </ListGroup>
            </div>
        )
    }
}