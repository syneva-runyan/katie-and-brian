import React, { Component } from "react";
import './Nav.css';
import { NavLink  } from "react-router-dom";


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
        
        return (
            <div className={`navWrapper ${this.props.alwaysExpanded && 'alwaysOpen'}`}>
                <span onClick={this.toggleMenu} className={`${mobileExpandedBackground} navBackground`} />
                <div className={`nav ${mobileExpandedClass} ${this.props.alwaysExpanded && 'alwaysOpen'}`}>
                    <NavLink onClick={this.closeMenu} activeClassName="navItem--active" className="navItem navItem--home" to="/">K&B</NavLink>
                    <NavLink onClick={this.closeMenu} activeClassName="navItem--active" className="navItem" to="/rsvp">RSVP</NavLink>
                    <NavLink onClick={this.closeMenu} activeClassName="navItem--active" className="navItem" to="/our-story">Our Story</NavLink>
                    <NavLink onClick={this.closeMenu} activeClassName="navItem--active" className="navItem" to="/event-info">Event Info</NavLink>
                    <NavLink onClick={this.closeMenu} activeClassName="navItem--active" className="navItem" to="/accomodations">Accomodations</NavLink>
                    <NavLink onClick={this.closeMenu} activeClassName="navItem--active" className="navItem" to="/wedding-party">Wedding Party</NavLink>
                    <NavLink onClick={this.closeMenu} activeClassName="navItem--active" className="navItem" to="/registry">Registry</NavLink>
                    <NavLink onClick={this.closeMenu} activeClassName="navItem--active" className="navItem" to="/photos">Photos</NavLink>
                </div>
                <button className={`navMobileCTA ${this.props.alwaysExpanded && 'alwaysOpen'}`} onClick={this.toggleMenu}>cta</button>
            </div>
        );
    }
}

export default Carousel;
