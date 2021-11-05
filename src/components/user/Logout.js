import React from "react";
import { NavLink } from "react-router-dom";

const Logout = () => {
	return (
		<section className="user__section">
			<div>
				<div>
					<h1 className="user__title">Wylogowanie nastąpiło <br/> pomyślnie!</h1>
					<div className="decoration" />
				</div>

				<div className="user__box_buttons">
					<div className="user__buttons_logout">
						<NavLink to="/">
							{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
							<button className="user__btn btn_border ">Strona Główna</button>
						</NavLink>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Logout;
