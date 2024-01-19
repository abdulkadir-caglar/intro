import alertify from 'alertifyjs';
import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export default class FormDemo2 extends Component {
    state = { email: "", password: "", city: "", description: "" }

    handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alertify.success(this.state.email + " added to DB.");
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type='email' name='email' placeholder='Email..' onChange={this.handleChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type='password' name='password' placeholder='Password..' onChange={this.handleChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input type='textarea' name='description' placeholder='Password..' onChange={this.handleChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="city">City</Label>
                        <Input type="select" name="city" id="city" onChange={this.handleChange}>
                            <option>İstanbul</option>
                            <option>Ankara</option>
                            <option>Bursa</option>
                            <option>Edirne</option>
                        </Input>
                    </FormGroup>
                    <Button type="submit">Submit</Button>
                </Form>
            </div>
        );
    }
}