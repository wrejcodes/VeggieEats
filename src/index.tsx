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
				<div style={{"margin-left": "30%", padding: "10px 0px 2px 0px"}}>
					<Search onSearch={this.searchForAddress(address)} />
				</div>
				<div>
					<Map lat={31.3303} long={89.3357} />
				</div>
			</div>);
	}
}

//This is where we will render our app
// for now we don't have any components to render so I'll just leave this commented

ReactDOM.render(
	<App />, document.getElementById("content") 	
);