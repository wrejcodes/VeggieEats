import * as React from "react";
import * as ReactDOM from "react-dom";

// here is where we will import the other components we make from  ./components/Name_of_component
import {Header} from "./components/Header";
import {Map, MapProps} from "./components/Map";
import {Search, Coordinates} from "./components/Search";
import {LocationButton} from "./components/LocationButton";

interface Restaurant{
	name:string;
	description: string;
	lat: number;
	long: number;
}

interface AppState {
	location: Coordinates|null;
	restaruants: Restaurant[];

}

class App extends React.Component<undefined,AppState>{

	constructor(){
		super();
		this.state = {location: {lat: 31.3303, long:-89.3357}, restaruants: []};
	}

	componentDidMount(){
		if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition((pos)=>{
				// this is the callback for accepting the position
				this.setState({location: {lat: pos.coords.latitude, long: pos.coords.longitude}});
			}, (err)=>{
				console.log(`Error:${err.code}, Message: ${err.message}`);
			}, {enableHighAccuracy:true, timeout: 5000});
		}
	}

	searchForAddress(address) {
		alert(address);
	}

	render(){
		
		return( <div style={{backgroundColor: "#D6D6D6", padding: "0px"}}> 
				<Header />
				<div style={{display: "flex", "flex-direction": "row", "justify-content": "space-around"}}>
					<div style={{"font-size": "25px", width: "35%"}}>
						<p>
							To the right you will see a list of vegitarian friendly options in your area.
							If you are looking for a specific restaruant simply search for it in the area
							provided. Travelling to another city? Search for that city and all vegitarian
							options in a 25 mile radius will appear from that location.
						</p>
					</div>
					<div style={{"flex-direction": "column"}}>
						<div style={{"margin-top": "18px"}}>
							<Search onSearch={(address)=>{this.searchForAddress(address)}} />
							<LocationButton onClick={(position)=>{alert(position)}}/>
						</div>
						<div style={{"margin-top": "3px"}}>
							<Map lat={this.state.location.lat} long={this.state.location.long} />
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