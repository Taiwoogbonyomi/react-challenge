import React, {Component} from "react";
import css from "./css/NavBarForm.module.css";

class NavBarForm extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            isLoggedIn: true,
        }

}

    render() {
        return (
            <div className= {css.NavBar}>
                <h1>My Gallery</h1>
            </div>
    )}

}
export default NavBarForm