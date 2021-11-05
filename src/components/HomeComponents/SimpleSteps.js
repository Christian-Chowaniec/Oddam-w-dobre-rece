import React from "react";
import { Link } from "react-router-dom";

const HomeSimpleSteps = () => {
	return (
		<section id="simple_steps">
			<div className="HomeSimpleSteps__box">
				<h2 className="HomeSimpleSteps__main_title">
					Wystarczą 4 proste kroki
				</h2>
				<div className="decoration" />
				<div className="HomeSimpleSteps__row_container">
					<div className="HomeSimpleSteps__row">
						<div className="HomeSimpleSteps__col">
							<div className="HomeSimpleSteps__icon_1" />
							<h4 className="HomeSimpleSteps__title">Wybierz rzeczy</h4>
							<span className="HomeSimpleSteps__decoration" />
							<p className="HomeSimpleSteps__description">
								ubrania, zabawki, sprzęt i inne
							</p>
						</div>
						<div className="HomeSimpleSteps__col">
							<div className="HomeSimpleSteps__icon_2" />
							<h4 className="HomeSimpleSteps__title">Spakuj je</h4>
							<span className="HomeSimpleSteps__decoration" />
							<p className="HomeSimpleSteps__description">
								skorzystaj z worków na śmieci
							</p>
						</div>
						<div className="HomeSimpleSteps__col">
							<div className="HomeSimpleSteps__icon_3" />
							<h4 className="HomeSimpleSteps__title">
								Zdecyduj komu chcesz pomóc
							</h4>
							<span className="HomeSimpleSteps__decoration" />
							<p className="HomeSimpleSteps__description">
								wybierz zaufane miejsce
							</p>
						</div>
						<div className="HomeSimpleSteps__col">
							<div className="HomeSimpleSteps__icon_4" />
							<h4 className="HomeSimpleSteps__title">Zamów kuriera</h4>
							<span className="HomeSimpleSteps__decoration" />
							<p className="HomeSimpleSteps__description">
								kurier przyjedzie w dogodnym terminie
							</p>
						</div>
					</div>
				</div>

				<div className="HomeSimpleSteps__button_center">
					<Link to="/logowanie">
						<button className="btn__oddaj_rzeczy">
							ODDAJ <br /> RZECZY
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default HomeSimpleSteps;
