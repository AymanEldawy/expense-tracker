import React , {Component}from 'react';
import {NavLink} from 'react-router-dom';
import { Fa_Resume , Fa_Profile , Fa_Contact,Fa_Home , Fa_User} from '../../lib/fontAwsome'
import img from '../../image/Artboard-23.png';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem} from 'reactstrap';

export default class Navegation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
        <div className="container" >
          <NavbarBrand to="/">
            <img src={img} />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink exact to="/">{Fa_Home()}Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about">{Fa_User()} About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/skills">{Fa_Resume()} Skills</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/profile">{Fa_Profile()} Profile</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/contact">{Fa_Contact()} Contact </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}