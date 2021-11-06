import React from "react";
import { useState } from "react";

const HomeContactForms = () => {
	

	// HomeContactForms
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const [errorName, setErrorName] = useState([]);
	const [errorEmail, setErrorEmail] = useState([]);
	const [errorMessage, setErrorMessage] = useState([]);
	const [sendSuccess, setSendSuccess] = useState("");

	const handleSubmit = e => {
		e.preventDefault();

		//name
		let isValid = true;

		if (name.length < 3) {
			setErrorName("Podane imię jest nieprawidłowe!");
			isValid = false;
		} else {
			setErrorName("");
		}
		//email
		const re =
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (email.length < 5 || !re.test(email.toLowerCase())) {
			setErrorEmail("Podany email jest nieprawidłowy!");
			isValid = false;
		} else {
			setEmail("");
		}
		//textarea
		if (message.length < 120) {
			setErrorMessage("Wiadomość musi mieć co najmniej 120znaków!");
			isValid = false;
		} else {
			setErrorMessage("");
		}
		//submit
		if (!isValid) {
			console.log("errors!");
		} else {
			setName("");
			setEmail("");
			setMessage("");
			setErrorName("");
			setErrorEmail("");
			setErrorMessage("");
			sendSuccess("Wiadomość została wysłana!  Wkrótce sie skontaktujemy.");
			console.log("success!");
		}
	};

	// state={
    //     name:'',
    //     email:'',
    //     message:'',

    //     nameError:false,
    //     emailError:false,
    //     messageError:false,

    //     messageSend:false,
    //     fetchError:false

    // };

	const SendForm = () => {
		fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},body: JSON.stringify({
				name, email, message
			})
		});
	};

	return (
		<>
			<div className="validation__success">{sendSuccess}</div>

			<form onSubmit={handleSubmit} className="HomeContact__form">
				<div className="HomeContact__form_top">
					<div className="HomeContact__form_top_item">
						<label for="name">Wpisz swoje imię</label>
						<input
							type="text"
							id="name"
							name="name"
							placeholder="Christian"
							className="HomeContact__form_top_item_text"
							onChange={e => setName(e.target.value)}
						/>
						<span className="validation__error">{errorName}</span>
					</div>

					<div className="HomeContact__form_top_item">
						<label for="email">Wpisz swój email</label>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="abc@xyz.pl"
							onChange={e => setEmail(e.target.value)}
						/>
						<span className="validation__error">{errorEmail}</span>
					</div>
				</div>

				<div className="HomeContact__form_bottom">
					<label className="HomeContact__textarea_label">
						Wpisz swoją wiadomość
					</label>

					<textarea
						className="HomeContact__textarea"
						id="HomeContact__textarea_id"
						rows="4"
						placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
						onChange={e => setMessage(e.target.value)}
					></textarea>
					<span className="validation__error">{errorMessage}</span>
				</div>

				<div className="HomeContact__form_submit_box">
					<button
						className="HomeContact__form_submit_button"
						type="submit"
						onClick={SendForm}
					>
						Wyślij
					</button>
				</div>
			</form>
		</>
	);
};
export default HomeContactForms;
