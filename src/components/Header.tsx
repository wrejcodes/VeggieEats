import * as React from "react";


export class Header extends React.Component<undefined,undefined>{
	render(){
		const img_style = {opacity: 0.5, display: "block"};
		return(<header>
				<h1>VeggieEats</h1>
				<p>Find vegetarian friendly options in your area</p>
				<img style={img_style} src={ require('../../assets/brooke-lark-229136.jpg')} />
			  </header>
		);
	}
}