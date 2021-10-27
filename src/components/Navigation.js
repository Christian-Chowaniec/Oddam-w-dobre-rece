import React from 'react';
import {BrowserRouter as Router, NavLink} from "react-router-dom";
import {Link} from 'react-scroll'

const Navigation = () => {
    return (
        <nav className="Navigation__menu">
            <ul className="Navigation__menu_ul">
                <Router>
                    <li className="Navigation__menu_li" ><NavLink exact to="/">Start</NavLink></li>
                    <li className="Navigation__menu_li" ><Link to="simple_steps"> O co chodzi?</Link></li>
                    <li className="Navigation__menu_li" ><Link to="about_us">O nas</Link></li>
                    <li className="Navigation__menu_li" ><Link to="who_we_help">Fundacja i organizacje</Link></li>
                    <li className="Navigation__menu_li" ><Link to="contact_us">Kontakt</Link></li>
                </Router>
            </ul>
        </nav>
    );
};

export default Navigation;
