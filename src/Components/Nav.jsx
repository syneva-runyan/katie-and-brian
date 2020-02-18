import React, { Component } from "react";
import './Nav.css';
import { NavLink  } from "react-router-dom";


function cleanRoute(route) {
    const name =  route.replace("/", "");
    if(name === '') {
        return 'home'
    }
    return name;
  }

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileExpanded: false,
        };
    }
    toggleMenu = () => {
        this.setState({
            mobileExpanded: !this.state.mobileExpanded,
        });
    }

    closeMenu = () => {
        this.setState({
            mobileExpanded: false,
        });
    }

    render() {
        const mobileExpandedClass = this.state.mobileExpanded && 'nav--expanded';
        const mobileExpandedBackground = this.state.mobileExpanded && 'navBackground--expanded';
        const route = cleanRoute(window.location.pathname);
        return (
            <div className={`navWrapper ${route}`}>
                <span onClick={this.toggleMenu} className={`${mobileExpandedBackground} navBackground`} />
                <div className={`nav ${mobileExpandedClass} ${route}`}>
                    <NavLink onClick={this.closeMenu} activeClassName="navItem--active" className="navItem navItem--home" to="/">K&B</NavLink>
                    <NavLink onClick={this.closeMenu} activeClassName="navItem--active" className="navItem" to="/our-story">Our Story</NavLink>
                    <NavLink onClick={this.closeMenu} activeClassName="navItem--active" className="navItem" to="/event-info">Event Info</NavLink>
                    <NavLink onClick={this.closeMenu} activeClassName="navItem--active" className="navItem" to="/accomodations">Accomodations</NavLink>
                    <NavLink onClick={this.closeMenu} activeClassName="navItem--active" className="navItem" to="/wedding-party">Wedding Party</NavLink>
                    <NavLink onClick={this.closeMenu} activeClassName="navItem--active" className="navItem" to="/registry">Registry</NavLink>
                    <NavLink onClick={this.closeMenu} activeClassName="navItem--active" className="navItem" to="/photos">Photos</NavLink>
                    <NavLink onClick={this.closeMenu} activeClassName="navItem--active" className="navItem" to="/things-to-do">Things to do in PTC</NavLink>
                </div>
                <button className={`navMobileCTA ${route}`} onClick={this.toggleMenu}>cta</button>
            </div>
        );
    }
}

export default Carousel;
