import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [{
                categoryId: 1,
                categoryName: "Beverages"
            },
            {
                categoryId: 2,
                categoryName: "Condiments"
            }
            ]
        };
    }

    render() {
        return (
            <div>
                <h2>{this.props.info.title}</h2>
                <ListGroup>
                    {
                        this.state.categories.map(category => (
                            <ListGroupItem key={category.categoryId}>
                                {category.categoryName}
                            </ListGroupItem>
                        ))
                    }
                </ListGroup>
            </div>
        )
    }
}