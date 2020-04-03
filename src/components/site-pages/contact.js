// import React, {Component} from "react"

// export default class Contact extends Component{
//     constructor(props) {
//         super(props)
//         this.state = {
//             name: "",
//             email: "",
//             message: ""
//         }
//     }

//     handleChange = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//     }
    
//     handleSubmit =(e)=> {
//         e.preventDefault()
        // this.props.changeName(this.state.name, this.state.email, this.state.message)
        // this.setState({})
    // }

//     render() {
//         return(
//             <div className= "contact-page-wrapper">
//                     <h1>Contact Mr. Zee</h1>
//                     <div className="form-background">
//                         <form className="contact-form" onSubmit = {this.handleSubmit}>
//                             <div>
//                                 <input className = "Name"
//                                     type="text"
//                                     name="Name"
//                                     placeholder="Name"
//                                     onChange={this.handleChange}
//                                 />  
//                             </div>

//                             <div>
//                                 <input className="Email"
//                                     type="text"
//                                     name="Email"
//                                     placeholder="Email"
//                                     onChange={this.handleChange}
//                                 />
//                             </div>

//                             <div>
//                                 <input className="Message"
//                                     type="text"
//                                     name="Message"
//                                     placeholder="Message"
//                                     onChange={this.handleChange}
//                                 />
//                             </div>
                            
//                             <div>
//                                 <input className="submit"
//                                     type="submit"
//                                     value="Send"
//                                 />
//                             </div>
//                         </form>
//                     </div>
//             </div>
//         )
//     }
// }