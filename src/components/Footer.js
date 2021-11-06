import React from "react";

const Footer = () => {
	return (
		<section className="Footer">
			<p>Copyright by CoderLab</p>
			<div className="Footer__items">
				{/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
				<a href="https://www.facebook.com/CodersLabSzkolaIT/"  className="Footer__icon_fb" />
				{/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
				<a href="https://www.facebook.com/CodersLabSzkolaIT/" className="Footer__icon_inst" />
			</div>
		</section>
	);
};

export default Footer;
