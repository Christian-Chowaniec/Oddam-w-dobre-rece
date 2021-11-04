import React from "react";
import Footer from "../Footer";

const HomeContact = () => {
	return (
		<section id="contact_us">
			<div className="HomeContact__box">
				<div className="HomeContact__left_box">
					<div className="HomeContact__background_image_box">
						<div className="HomeContact__background_image" />
					</div>
				</div>

				<div className="HomeContact__right_box">
					<div className="HomeContact__items">
						<h2 className="HomeContact__title">Skontaktuj sie z nami</h2>
						<div className="decoration" />

						<span className="validation__success">
							Wiadmość została wysłana! <br /> Wkrótce sie skontakujemy.
						</span>

						<div className="HomeContact__form_box">
							<form className="HomeContact__form">
								<div className="HomeContact__form_top">
									<div className="HomeContact__form_top_item">
										<label for="name">Wpisz swoje imię</label>
										<input
											type="text"
											id="name"
											name="name"
											placeholder="Christian"
											className="HomeContact__form_top_item_text"
										/>
										<span className="validation__error">
											Podane imię jest nieprawidłowe!
										</span>
									</div>

									<div className="HomeContact__form_top_item">
										<label for="email">Wpisz swój email</label>
										<input
											type="email"
											id="email"
											name="email"
											placeholder="abc@xyz.pl"
										/>
										<span className="validation__error">
											Podany email jest nieprawidłowy!
										</span>
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
									></textarea>
									<span className="validation__error">
										Wiadomość musi miec conajmniej 120znaków!
									</span>
								</div>

								<div className="HomeContact__form_submit_box">
									<input
										className="HomeContact__form_submit_button"
										type="submit"
										value="Wyślij"
									/>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</section>
	);
};

export default HomeContact;
