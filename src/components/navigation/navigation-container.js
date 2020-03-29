import React from 'react'
import { NavLink } from "react-router-dom"

const NavigationContainer = () => {

    return (
        <div className='nav-wrapper'>
            <div className="nav-link-wrapper">
                <NavLink exact to="/">
                    Home
                </NavLink>
            </div>                    
        
            <div className="nav-link-wrapper">
                <NavLink to="/about">
                    About 
                </NavLink>
            </div>
        
            <div className="nav-link-wrapper">
                <NavLink to="/contact">
                    Contact
                </NavLink>
            </div>                
        </div>
    )
}

export default NavigationContainer