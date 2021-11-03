import React from "react";

const Login = () => {
	return (
		<>
			<h1>Zaloguj się</h1>

			<form>
				<label>
					E-mail
					<input type="email" name="email" />
				</label>
			</form>

			<form>
				<label>
					Hasło
					<input type="password" />
				</label>
			</form>

			<div>
				<div>
					<button className="register_button">Załóż konto</button>
				</div>

				<div>
					<button className="login_button">Zaloguj</button>
				</div>
			</div>
		</>
	);
};

export default Login;
