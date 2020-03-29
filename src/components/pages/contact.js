import React, {Component} from "react"

export default class Contact extends Component{
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            message: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleSubmit =(e)=> {
        e.preventDefault()
        this.props.changeName(this.state.name, this.state.email, this.state.message)
        this.setState({})
    }

    render() {
        return(
            <div>
                <h1>Contact Mr. Zee</h1>
                <form onSubmit = {this.handleSubmit}>
                    <input 
                        type="text"
                        name="Name"
                        placeholder="Name"
                        onChange={this.handleChange}
                    />
                    <input 
                        type="text"
                        name="Email"
                        placeholder="Email"
                        onChange={this.handleChange}
                    />
                    <input 
                        type="text"
                        name="Message"
                        placeholder="Message"
                        onChange={this.handleChange}
                    />
                    <input 
                        type="submit"
                        value="Send"
                    />
                    
                </form>
            </div>
        )
    }
}