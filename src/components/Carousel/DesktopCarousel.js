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
		bottom: "15%",
		left: "3vw",
		backgroundColor: "rgba(0, 0, 0, 0.3)",
		padding: "10px",
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
	width: "95%",
	position: "absolute",
	bottom: "5%",
	textAlign: "right",
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

const DesktopCarousel = ({ pic }) => {
	return (
		<Carousel
			timeout={300}
			autoPlay={false}
      animation={"slide"}
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

export default DesktopCarousel;