import Grid from "@material-ui/core/Grid";
import {PriceCarousel} from "components/Carousel"
import React from "react";

const pricePic = [
	{
		// name: "Title Name #1",
		// memo: "100% Color",
		// link: "Probably the most random thing you have ever seen!",
		filename: "./servicepage/price_list_1.jpg",
	},
	{
		// name: "Title Name #2",
		// memo: "100% Color",
		// link: "Hello World!",
		filename: "./servicepage/price_list_2.jpg",
	},
];



const Price = ({mobileView}) => {
	return (
		<Grid>
			<PriceCarousel pic={pricePic} mobileView={mobileView} />
		</Grid>
	);
};

export default Price;
