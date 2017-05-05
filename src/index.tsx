import * as React from "react";
import * as ReactDOM from "react-dom";

// here is where we will import the other components we make from  ./components/Name_of_component
import {Header} from "./components/Header";
import {Map, MapProps} from "./components/Map";
import {Search} from "./components/Search";

class App extends React.Component<undefined,undefined>{
	searchForAddress(address) {
		alert(address);
	}

	render(){
		let address= "This will need to be fixed";
		
		return( <div style={{backgroundColor: "#D6D6D6"}}> 
				<Header />
				<div style={{display: "flex", "flex-direction": "row", "justify-content": "space-around"}}>
					<div style={{"font-size": "25px", width: "35%"}}>
						<p>
							Do you think plants, vegetables, and whatever tofu is have been living the easy
							life for far to long? Well show them who the boss is the same way the rest
							of carnivorous world does! Serve them up on a nice platter and eat them. You
							can probably even request them to be cooked the same way you like your favorite
							steak to be cooked, medium rare. By selecting a restaraunt from this list PETA
							is sure to send you friend request on Facebook.
						</p>
					</div>
					<div style={{"flex-direction": "column"}}>
						<div style={{"margin-top": "18px"}}>
							<Search onSearch={this.searchForAddress(address)} />
						</div>
						<div style={{"margin-top": "3px"}}>
							<Map lat={31.3303} long={89.3357} />
						</div>
					</div>
				</div>
			</div>);
	}
}

//This is where we will render our app
// for now we don't have any components to render so I'll just leave this commented

ReactDOM.render(
	<App />, document.getElementById("content") 	
);