import React from "react";
import { NavLink } from "react-router-dom";

const LogRegBtn = () => {
	return (
		<div className="LogRegBtn__box">
			<ul className="LogRegBtn__ul">
				<NavLink to="/logowanie">
					<li>
						<button className="LogRegBtn__li btn__login">Zaloguj</button>
					</li>
				</NavLink>

				<NavLink to="/rejestracja">
					<li>
						<button className="LogRegBtn__li btn__register">Załóż konto</button>
					</li>
				</NavLink>
			</ul>
		</div>
	);
};

export default LogRegBtn;
