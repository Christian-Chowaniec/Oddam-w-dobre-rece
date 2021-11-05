import React from "react";

const HomeAboutUs = () => {
	return (
		<section id="about_us">
			<div className="HomeAboutUs__box">
				<div className="HomeAboutUs__left_side">
					<div className="HomeAboutUs__items">
						<h2 className="HomeAboutUs__title">O nas</h2>
						<div className="decoration" />
						<p className="HomeAboutUs__description">
							Nori grape silver beet broccoli kombu beet greens fava bean potato
							quandong celery. Bunya nuts black-eyed pea prairie turnip leek
							lentil turnip greens parsnip.
						</p>
						<div className="HomeAboutUs__signature_box">
							<div className="HomeAboutUs__signature" />
						</div>
					</div>
				</div>

				<div className="HomeAboutUs__right_side">
					<div className="HomeAboutUs__img" />
				</div>
			</div>
		</section>
	);
};

export default HomeAboutUs;
