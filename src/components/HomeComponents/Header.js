import React from "react";
import { Link } from "react-router-dom";

const HomeHeader = () => {
	return (
		<section>
			<div className="HomeHeader__main">
				<div className="HomeHeader__main_img">
					<div className="HomeHeader__background" />
				</div>

				<div className="HomeHeader__main_text">
					<h2 className="HomeHeader__title">
						Zacznij pomagać! <br /> Oddaj niechciane rzeczy w zaufane ręce
					</h2>
					<div className="decoration" />
					<div className="btn__HomeHeader_buttons">
						<Link to="/logowanie">
							<button className="btn__HomeHeader">
								ODDAJ <br /> RZECZY
							</button>
						</Link>
						<Link to="/logowanie">
						<button className="btn__HomeHeader">
							ZORGANIZUJ <br /> ZBIÓRKĘ
						</button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HomeHeader;
