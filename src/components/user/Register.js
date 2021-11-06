import { useState } from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
	const [email, setEmail] = useState("");
	const [errorEmail, setErrorEmail] = useState([]);

	const [password, setPassword] = useState("");
	const [errorPassword, setErrorPassword] = useState([]);

	const [password2, setPassword2] = useState("");
	const [errorPassword2, setErrorPassword2] = useState([]);

	const handleSubmit = e => {
		e.preventDefault();

		let isValid = true;

		//email
		const re =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (email.length < 5 || !re.test(email.toLowerCase())) {
			setErrorEmail("Podany email jest nieprawidłowy!");
			isValid = false;
			console.log("email_ble");
		} else {
			console.log("email_gut");
			setEmail("");
		}
		//password
		if (password.length < 6) {
			setErrorPassword("Podane hasło jest za krótkie!");
			isValid = false;
			console.log("password_ble");
		} else {
			console.log("password_gut");
			setErrorPassword("");
		}
		//password2
		if (password2 !== password) {
			setErrorPassword2("Podane hasło różni się!");
			console.log("password2_ble");
			isValid = false;
		} else {
			console.log("password2_gut");
		}
		//send
		if (isValid) {
			console.log("send");
			setEmail("");
			setErrorEmail("");
			setPassword("");
			setErrorPassword("");
			setPassword2("");
			setErrorPassword2("");
		}
	};
	return (
		<section className="user__section_register">
			<div>
				<div>
					<h1 className="user__title">Załóż Konto</h1>
					<div className="decoration" />
				</div>

				<form onSubmit={handleSubmit}>
					<div className="user__bg_register">
						<div className="user__form">
							<label className="user__label">
								E-mail
								<input
									className="user__input"
									type="text"
									name="email"
									onChange={e => setEmail(e.target.value)}
								/>
								<div className="user__error">{errorEmail}</div>
							</label>

							<label className="user__label">
								Hasło
								<input
									className="user__input"
									type="password"
									onChange={e => setPassword(e.target.value)}
								/>
								<div className="user__error">{errorPassword}</div>
							</label>

							<label className="user__label">
								Powtórz Hasło
								<input
									className="user__input"
									type="password"
									onChange={e => setPassword2(e.target.value)}
								/>
								<div className="user__error">{errorPassword2}</div>
							</label>
						</div>
					</div>

					<div className="user__box_buttons">
						<div className="user__buttons">
							<NavLink to="/logowanie">
								{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
								<button className="user__btn btn_no_border">Zaloguj</button>
							</NavLink>

							<button type="submit" className="user__btn btn_border ">
								Załóż konto
							</button>
						</div>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Register;
