import React from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
	return (
		<section className="user__section_register">
			<div>
				<div>
					<h1 className="user__title">Załóż Konto</h1>
					<div className="decoration" />
				</div>

				<div className="user__bg_register">
					<form className="user__form">
						<label className="user__label">
							E-mail
							<input className="user__input" type="email" name="email" />
                            <div className="user__error">Podany email jest nieprawidłowy!</div>
						</label>

						<label className="user__label">
							Hasło
							<input className="user__input" type="password" />
                            <div className="user__error">Podane hasło jest za krótkie!</div>
						</label>

						<label className="user__label">
							Powtórz Hasło
							<input className="user__input" type="password" />
                            <div className="user__error">Podane hasło nie jest takie same!</div>
                            
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
