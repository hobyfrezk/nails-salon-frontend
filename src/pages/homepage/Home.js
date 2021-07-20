import React from "react";
import Grid from "@material-ui/core/Grid";
import HomeCarousel from "../../components/Carousel/HomeCarousel"

const homePic = [
	{
		name: "Title Name #1",
		memo: "100% Color",
		link: "Probably the most random thing you have ever seen!",
		filename: "./homepage/cut-collective-hN0uatQvBAc-unsplash.jpg",
	},
	{
		name: "Title Name #2",
		memo: "100% Color",
		link: "Hello World!",
		filename: "./homepage/maria-lupan-ZiZ4q21W9vc-unsplash.jpg",
	},
	{
		name: "Title Name #3",
		memo: "100% Color",
		link: "Full makeup available!",
		filename: "./homepage/jazmin-quaynor-FoeIOgztCXo-unsplash.jpg",
	},
];



const Home = () => {
	return (
		<Grid>
			<HomeCarousel pic={homePic} />
		</Grid>
	);
};

export default Home;