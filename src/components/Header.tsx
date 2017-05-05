import * as React from "react";


export class Header extends React.Component<undefined,undefined>{
	render(){
		const header_style = {"background-color": "#0A233D", color: "#FFFFFF", display: "flex", "flex-direction":"column",
							 "justify-content": "center", "text-align": "center", padding: "0px 50px 10px 50px"};
		const h1_style = {"font-family": "Great Vibes, cursive", "font-size": "75px"}
		
		return(<header style={header_style}>
				<h1 style={h1_style}>VeggieEats</h1>
				<p>Find vegetarian friendly options in your area</p>
				<img src={ require('../../assets/brooke-lark-229136.jpg')} />
			  </header>
		);
	}
}