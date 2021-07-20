import Carousel from "react-material-ui-carousel";
import { makeStyles } from "@material-ui/core/styles";
import { CarouselFont } from "../Theme";

const useStyles = makeStyles((theme) => ({
	container: {
		position: "relative",
		color: "white",
		fontFamily: CarouselFont,
	},
	textbox: {
		position: "absolute",
    height: "100%",
    width: "100%",
		top: "0%",
		backgroundColor: "rgba(0, 0, 0, 0.3)",
	},
	title1: {
		fontSize: "2em",
		margin: "0",
	},
	memo: {
		fontSize: "1em",
		margin: "0",
	},
	link: {
		fontSize: "0.5em",
		margin: "0",
		textDecoration: "underline",
	},
	img: {
		width: "100vw",
		aspectRatio: "10/3",
		objectFit: "cover",
		filter: "sepia(10%)",
	},
}));

const navButtonStyle = {
	margin: "10px",
	filter: "opacity(80%)",
	transform: "scale(0.7)",
};

const indicatorContainerStyle = {
  marginTop: "5px",
};

function Pic({ item }) {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<img className={classes.img} src={item.filename} alt={item.name} />
			<div className={classes.textbox}>
				<p className={classes.memo}>{item.memo}</p>
				<p className={classes.title1}>{item.name}</p>
				<p className={classes.link}>{item.link}</p>
			</div>
		</div>
	);
}

const MobileCarousel = ({ pic }) => {
	return (
		<Carousel
			timeout={300}
			autoPlay={false}
			navButtonsAlwaysVisible={true}
			navButtonsProps={{ style: navButtonStyle }}
			indicatorContainerProps={{ style: indicatorContainerStyle }}
		>
			{pic.map((item, i) => (
				<Pic key={i} item={item} />
			))}
		</Carousel>
	);
};

export default MobileCarousel;