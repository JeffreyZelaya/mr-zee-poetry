import React from "react"
import profilePicture from "../images/profile-pic.JPG"

const About = () => {
    return (
        <div className="about-page-wrapper">
            <h1>About Mr. Zee</h1>
                <div className="profile-pic"
                style = {{
                    background: "url (" + profilePicture + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
                />
            
                <div className="about-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim ratione beatae quisquam qui quaerat modi neque deleniti exercitationem dicta veniam, quasi minima vitae, laudantium minus officia voluptates accusamus fugiat quam!
                    Minima incidunt possimus labore mollitia iure consequatur expedita vitae ut autem impedit sunt architecto, repellat, at accusantium inventore corporis numquam! Pariatur, minima nesciunt amet inventore sint quas ipsum debitis nihil?
                    Inventore ratione, eaque, nemo rerum id quis totam in unde optio error aperiam facilis quam! Repellat quae nesciunt aliquid? Cupiditate at repellat odit nam porro enim illo inventore alias doloribus!
                    Alias eligendi ipsam quae officiis sapiente nostrum at cumque inventore ex dicta quam dolorum nisi aperiam, voluptatibus labore veritatis mollitia rerum magni praesentium? Quam nostrum consequatur molestiae. Adipisci, tempore harum!
                    Odit quas dolorum debitis est aliquid cumque quos deleniti praesentium, vitae, rerum eveniet, repudiandae voluptates laborum assumenda corporis! Velit debitis dolore porro harum pariatur modi voluptate, dolores nihil sit doloribus?
                    Porro soluta sit blanditiis nihil maxime officiis animi deleniti, cupiditate unde voluptatibus quaerat possimus, nostrum praesentium reiciendis fugit architecto quibusdam iste aliquid! Reprehenderit atque magni optio ab ipsum doloremque similique!
                </div>
        </div>
    )
}
 
export default About;