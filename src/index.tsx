import * as React from "react";
import * as ReactDOM from "react-dom";

// here is where we will import the other components we make from  ./components/Name_of_component
import {Header} from "./components/Header";

class App extends React.Component<undefined,undefined>{
	render(){
		return( <Header />);
	}
}


//This is where we will render our app
// for now we don't have any components to render so I'll just leave this commented

ReactDOM.render(
	<App />, document.getElementById("content") 	
);