import React from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
	return (
		<section className="user__section">
			<div>
				<div>
					<h1 className="user__title">Założ Konto</h1>
					<div className="decoration" />
				</div>

				<div className="user__bg_register">
					<form className="user__form">
						<label className="user__label">
							E-mail
							<input className="user__input" type="email" name="email" />
						</label>

						<label className="user__label">
							Hasło
							<input className="user__input" type="password" />
						</label>

						<label className="user__label">
							Powtórz Hasło
							<input className="user__input" type="password" />
						</label>
					</form>
				</div>

				<div className="user__box_buttons">
					<div className="user__buttons">
				
						<NavLink to="/logowanie">
							{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
							<button className="user__btn btn_no_border">Zaloguj</button>
						</NavLink>
                        <NavLink to="/rejestracja">
							{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
							<button className="user__btn btn_border ">Załóż konto</button>
						</NavLink>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Register;
