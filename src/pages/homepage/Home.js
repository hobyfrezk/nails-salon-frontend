import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const homePic = [
	{
		name: "Random Name #1",
		description: "Probably the most random thing you have ever seen!",
		filename: "./homepage/salon_shelf.jpg",
	},
	{
		name: "Random Name #2",
		description: "Hello World!",
		filename: "./homepage/salon_shelf2.jpg",
	},
	{
		name: "Random Name #3",
		description: "Hello World!!!!",
		filename: "./homepage/salon_shelf2.jpg",
	},
];

function Pic({ item }) {
	const style = {
		width: "100vw",
		aspectRatio: "16/9",
		objectFit: "cover",
	};

	return (
		<Paper>
			<h2>{item.name}</h2>
			<p>{item.description}</p>
			<img style={style} src={item.filename} alt={item.name} />
		</Paper>
	);
}

const Home = () => {
	return (
		<Grid>
			<p>HomePage</p>
			<Carousel>
				{homePic.map((item, i) => (
					<Pic key={i} item={item} />
				))}
			</Carousel>
		</Grid>
	);
};

export default Home;
