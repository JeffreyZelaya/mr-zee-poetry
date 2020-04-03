import React, { Component } from "react"
import { Form, FormGroup, Input, Label, Button } from "reactstrap"
import axios from "axios"

class FormExample extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            email: "",
            message: "",

        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = e => {
        this.setState({ [e.target.name]:e.target.value })
    }

    handleSubmit(e) {
        const {name, email, message} = this.state
        e.preventDefault()
        console.log("yo  yo")


        axios.post("/api/form", {
            name,
            email,
            message 
        }).then(() => { 
            console.log("yo")
            this.setState({
                name: "",
                email: "",
                message: "",
            })   
        }).catch((e) => {
            console.log(e)
        }) 

    }

    render () {
        return(
            <div className= "contact-page-wrapper">
                <h1>Contact Mr. Zee</h1>
                <div className="form-background">
                    <Form className="contact-form" onSubmit={this.handleSubmit}>
                        <FormGroup>
                        {/* <Label for="name">Name</Label>  */}
                        <Input className = "Name"
                        type="text"
                        name="name"
                        placeholder="Name"
                        value = {this.state.name}
                        onChange={this.handleChange} />
                        </FormGroup>

                        <FormGroup>
                        {/* <Label for="email">Email</Label>  */}
                        <Input className="Email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={this.handleChange} />
                        </FormGroup>

                        <FormGroup>
                        {/* <Label for="message">Message</Label>  */}
                        <Input className="Message"
                        type="text"
                        name="message"
                        placeholder="Message"
                        onChange={this.handleChange} />
                        </FormGroup>

                        <input className="submit"
                        type="submit"
                        value="Send"
                        // onChange={this.handleSubmit}
                        />
                        
                        {/* <Button className="submit">Submit</Button> */}
                    </Form>
                </div>
            </div>
        )
    }
}


     
export default FormExample;