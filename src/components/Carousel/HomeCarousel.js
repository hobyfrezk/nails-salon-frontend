import React, { useState, useEffect } from "react";
import DesktopCarousel from "./DesktopCarousel";
import MobileCarousel from "./MobileCarousel";

const HomeCarousel = ({ pic }) => {
	const [state, setState] = useState({
		mobileView: false,
	});

	const { mobileView } = state;

	useEffect(() => {
		const setResponsiveness = () => {
			return window.innerWidth < 900
				? setState((prevState) => ({ ...prevState, mobileView: true }))
				: setState((prevState) => ({ ...prevState, mobileView: false }));
		};

		setResponsiveness();
		window.addEventListener("resize", () => setResponsiveness());

		return () => {
			window.removeEventListener("resize", () => setResponsiveness());
		};
	}, [mobileView]);

	return (
		<div>
			{mobileView ? (
				<MobileCarousel pic={pic} />
			) : (
				<DesktopCarousel pic={pic} />
			)}
		</div>
	);
};

export default HomeCarousel;
