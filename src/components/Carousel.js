import Carousel from "react-material-ui-carousel";
import { CarouselFont } from "components/Theme";
import { makeStyles } from "@material-ui/core/styles";

const useHomeStyles = makeStyles((theme) => ({
	container: {
		color: "white",
		display: "flex",
		fontFamily: CarouselFont,
	},
	textbox: {
		position: "absolute",
		top: "250px",
		left: "5vw",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		padding: "20px",

		[theme.breakpoints.down("md")]: {
			position: "absolute",
			left: "0",
			top: "50px",
			padding: "0",
			backgroundColor: "rgba(0,0,0,0)",
			transform: `translate(30%, 50%)`,
		},
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
		[theme.breakpoints.down("md")]: {
			width: "100vw",
			aspectRatio: "1.66/1",
			objectFit: "cover",
			filter: " brightness(60%) grayscale(30%)",
		},
	},
}));

const navButtonStyle = {
	filter: "opacity(80%)",
	transform: "scale(0.7)",
};

const indicatorContainerStyle = {
	marginTop: "0",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	backgroundColor: "rgba(0, 0, 0, 0.1)",
	height: "40px",
};

function HomePic({ item }) {
	const classes = useHomeStyles();

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

const HomeCarousel = ({ pic }) => {

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
				<HomePic key={i} item={item} />
			))}
		</Carousel>
	);
};


const usePriceStyles = makeStyles((theme) => ({
	container: {
		color: "white",
		display: "flex",
		fontFamily: CarouselFont,
	},
	img: {
		width: "70wv",
		marginLeft: "auto",
		marginRight: "auto",
		objectFit: "cover",
		[theme.breakpoints.down("md")]: {
			width: "95%",
			marginLeft: "auto",
			marginRight: "auto",
			objectFit: "cover",
		},
	},
}));


function PricePic({ item }) {
	const classes = usePriceStyles();

	return (
		<div className={classes.container}>
			<img className={classes.img} src={item.filename} alt={item.name} />
		</div>
	);
}

const PriceCarousel = ({ pic }) => {

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
				<PricePic key={i} item={item} />
			))}
		</Carousel>
	);
};

export {HomeCarousel, PriceCarousel};