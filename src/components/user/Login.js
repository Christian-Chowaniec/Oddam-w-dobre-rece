import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
	return (
		<section className="user__section">
			<div>
				<div>
					<h1 className="user__title">Zaloguj się</h1>
					<div className="decoration" />
				</div>

				<div className="user__bg_login">
					<form className="user__form">
						<label className="user__label">
							E-mail
							<input className="user__input" type="email" name="email" />

							<div className="user__error">
								Podany email jest nieprawidłowy!
							</div>
						</label>

						<label className="user__label">
							Hasło
							<input className="user__input" type="password" />

							<div className="user__error"> 
							Podane hasło jest za krótkie! 
							</div>

						</label>
					</form>
				</div>

				<div className="user__box_buttons">
					<div className="user__buttons">
						<NavLink to="/rejestracja">
							<button className="user__btn btn_no_border">Załóż konto</button>
						</NavLink>
						<NavLink to="/zalogowano">
							<button className="user__btn btn_border">Zaloguj się</button>
						</NavLink>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Login;
