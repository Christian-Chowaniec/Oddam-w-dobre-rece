import React from "react";

import Footer from "../../Footer";
import HomeContactForms from "./ContactForms";


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
				
						<div className="HomeContact__form_box">
							
							<HomeContactForms/>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</section>
	);
};
export default HomeContact;