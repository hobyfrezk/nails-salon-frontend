import DesktopCarousel from "./DesktopCarousel";
import MobileCarousel from "./MobileCarousel";

const HomeCarousel = ({ pic, mobileView }) => {

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
