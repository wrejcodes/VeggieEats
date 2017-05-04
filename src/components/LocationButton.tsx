import * as React from "react";

export interface LocationButtonProps{
	onClick: (address:Position)=>void;
}

export class LocationButton extends React.Component<LocationButtonProps,undefined>{
	constructor(props:LocationButtonProps){
		super(props);

	}

	handleClick(){
		navigator.geolocation.getCurrentPosition((pos)=>{
			// this is the callback for accepting the position
			this.props.onClick(pos);
		}, (err)=>{
			console.log(`Error:${err.code}, Message: ${err.message}`);
		}, {enableHighAccuracy:true, timeout: 5000});
	}

	render(){

		return(

			<a onClick={this.handleClick}>
				Get current location
			</a>
		);
		
	}
}