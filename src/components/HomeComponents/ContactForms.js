import React from "react";
import { useState } from "react";

const HomeContactForms = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [errorName, setErrorName] = useState([]);
	const [errorEmail, setErrorEmail] = useState([]);
	const [errorMessage, setErrorMessage] = useState([]);
	const [sendSuccess, setSendSuccess] = useState("");

	// const button1 = document.getElementById("button1");
	// const emailField = document.getElementById("email");

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
			isValid = true;
		} else {
			setEmail("");
		}


		//textarea
		if (message.length < 120) {
			setErrorMessage("Wiadomość musi miec conajmniej 120znaków!");
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
			sendSuccess("Wiadmość została wysłana!  Wkrótce sie skontakujemy.");
			console.log("success!");
		}
	};

    //  button1.addEventListener("click",function(){
    //     const re =
    //     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    //     if (email.length < 5 || !re.test(email)) {
	// 		setErrorEmail("Podany email jest nieprawidłowy!");
	// 		// isValid = false;
	// 	} else {
	// 		setEmail("");
	// 	}

    //  })
    // const re =
    // /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	// button1.addEventListener("click", function () {
    //     // const re =
	// 	// 	/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	// 	const email = emailField.value;
	// 	if (re.test(String(email).toLowerCase())) {
	// 		setErrorMessage("Hiya Cowboy, this email will work for us 🤠");
	// 	} else {
	// 		setErrorMessage("Sorry, this email is not cool enough 😩");
	// 	}
	// });

	// function validateEmail(email) {
	// 	const re =
	// 		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	// 	return re.test(String(email).toLowerCase());
	// }

	return (
		<>
			<span className="validation__success">{sendSuccess}</span>

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
					<input
						className="HomeContact__form_submit_button"
						type="submit"
						value="Wyślij"
					/>
					
				</div>
                {/* <button  id="button1" type="submit">test</button> */}
			</form>
		</>
	);
};
export default HomeContactForms;
