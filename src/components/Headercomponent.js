import React, { Component } from 'react'
import { Navbar, NavbarBrand,Collapse, NavItem,NavbarToggler,Nav ,Jumbotron } from 'reactstrap';
import {NavLink} from 'react-router-dom';
class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            isNavOpen:false
        };
        this.toggleNav=this.toggleNav.bind(this);
    }
    toggleNav(){
        this.setState({
             
            isNavOpen: !this.state.isNavOpen
            
            });
    }
    render() {
        return (
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container col-lg-12 ">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="assets/images/logo.png" alt="Ristorante Con Fusion" height="30" width="41"/>
                        </NavbarBrand>  
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span class="fa fa-home fa-lg" aria-hidden="true"></span> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <span class="fa fa-info fa-lg" aria-hidden="true"></span> About Us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu">
                                        <span class="fa fa-list fa-lg" aria-hidden="true"></span> Menu
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <span class="fa fa-address-card fa-lg" aria-hidden="true"></span> Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante Con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        )
    }
}
export default Header;