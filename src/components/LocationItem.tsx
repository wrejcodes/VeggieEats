import * as React from "react";

export interface LocationItemProps {
	onClick: (string)=>void;
	address: string;
	timestamp: number|string;
	active: boolean;

}

export class LocationItem extends React.Component<LocationItemProps,undefined>{
	public address:string;
	public timestamp: number|string;

	constructor(props:LocationItemProps){
		super(props);
		this.address = this.props.address;
		this.timestamp = this.props.timestamp;
	}

	handleClick(){
		this.props.onClick(this.props.address);
	}

	render(){
		return(
			// maybe we should include moment js for the nice timestamp also might need to add bootsrap
			<a onClick={this.handleClick}>
				{this.props.address}
			</a>
		);
	}
}