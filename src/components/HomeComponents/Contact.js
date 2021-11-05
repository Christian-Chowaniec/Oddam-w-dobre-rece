import React from "react";

import Footer from "../Footer";
import HomeContactForms from "./ContactForms";


 const HomeContact = () => {

	// const [name,setName] = useState("");
	// const [email,setEmail] = useState("");
	// const [message,setMessage] = useState("");
	// const [errorName,setErrorName] = useState([]);

	// const handleSubmit = e => {
    //     e.preventDefault();
		


	// 	let isValid = true;
	// 	if(name.length < 3){
	// 		setErrorName("Imię jest zbyt krótkie!");

	// 	}else{
	// 		setErrorName("");
	// 	}

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

						{/* <span className="validation__success">
							Wiadmość została wysłana! <br /> Wkrótce sie skontakujemy.
						</span> */}

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