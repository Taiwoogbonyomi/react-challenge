import React, {Component} from "react";
import NavBarChild from "./NavBarChild";
import css from "./css/NavBarForm.module.css";

class NavBarForm extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            isLoggedIn: true,
        }
    }

    handleButtonClick = () => {
        this.setState((prevState) => ({
            isLoggedIn: prevState.isLoggedIn ? false: true
        }), () => console.log(this.state.isLoggedIn))
    }

    render() {
        return (
            <div className= {css.NavBar}>
                <h1>My Gallery</h1>
                

                <NavBarChild
                isLoggedIn={this.state.isLoggedIn}
                handleClick={this.handleButtonClick}
                />
            </div>
    )}

}
export default NavBarForm