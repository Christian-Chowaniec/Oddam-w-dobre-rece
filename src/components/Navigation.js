import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const Navigation = () => {
	return (
		<section>
			<nav className="Navigation__menu">
        
				<ul className="Navigation__menu_ul">
					<li>
						<NavLink exact to="/">
							<a className="Navigation__menu_li">Start</a>
						</NavLink>
					</li>

					<li>
						<Link to="simple_steps"
						smooth={true}
						duration={500}
						offset={50}>
							<a className="Navigation__menu_li">O co chodzi?</a>
						</Link>
					</li>

					<li>
						<Link to="about_us"
						smooth={true}
						duration={500}
						offset={50}>
							<a className="Navigation__menu_li">O nas</a>
              
						</Link>
					</li>
        

					<li>
						<Link to="who_we_help"
						smooth={true}
						duration={500}
						offset={50}>
							<a className="Navigation__menu_li">Fundacja i organizacje</a>
						</Link>
					</li>

					<li>
					
						<Link to="contact_us"
						smooth={true}
						duration={500}
						offset={50}>
							<a className="Navigation__menu_li">Kontakt</a>
						</Link>
						
					</li>
				</ul>
			</nav>
		</section>
	);
};

export default Navigation;

