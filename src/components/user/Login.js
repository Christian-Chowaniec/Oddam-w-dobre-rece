import { useState } from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
	const [email, setEmail] = useState("");
	const [errorEmail, setErrorEmail] = useState([]);

	const [password, setPassword] = useState("");
	const [errorPassword, setErrorPassword] = useState([]);

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
			setErrorPassword("Podane hasło jest nieprawidłowe!");
			isValid = false;
			console.log("password_ble");
		} else {
			console.log("password_gut");
			setErrorPassword("");
		}
		//send
		if (isValid) {
			console.log("send");
			setEmail("");
			setPassword("");
		}
	};

	return (
		<section className="user__section">
			<div>
				<div>
					<h1 className="user__title">Zaloguj się</h1>
					<div className="decoration" />
				</div>

				<form onSubmit={handleSubmit}>
					<div className="user__bg_login">
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
									id="password"
									onChange={e => setPassword(e.target.value)}
								/>
								<div className="user__error">{errorPassword}</div>
							</label>
						</div>
					</div>

					<div className="user__box_buttons">
						<div className="user__buttons">
							<NavLink to="/rejestracja">
								<button className="user__btn btn_no_border">Załóż konto</button>
							</NavLink>

							<button type="submit" className="user__btn btn_border">
								Zaloguj się
							</button>
						</div>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Login;

// import ChooseButton from "../WhoWeHelp/chooseBtn"