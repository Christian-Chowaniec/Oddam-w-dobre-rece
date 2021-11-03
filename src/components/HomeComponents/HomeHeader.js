import React from "react";
// import decoration from "src/assets/Home-Hero-Image"

const HomeHeader = () => {
	return (
		<section>
			<div className="HomeHeader__main">
				<div className="HomeHeader__main_img">
					<div className="HomeHeader__background" />
				</div>

				<div className="HomeHeader__main_text">
					<h2 className="HomeHeader__title">
						Zacznij pomagać! <br/> Oddaj niechciane rzeczy w zaufane ręce
					</h2>
					{/* <img src="decoration" alt="decoration" /> */}
					<div className="decoration" />
					<div className="btn__HomeHeader_buttons">
						<button className="btn__HomeHeader" href="#">
							ODDAJ <br/> RZECZY
						</button>
						<button className="btn__HomeHeader" href="#">
							ZORGANIZUJ <br/> ZBIÓRKĘ
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HomeHeader;
