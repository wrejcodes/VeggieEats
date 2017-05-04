import * as React from "react";
import {LocationItem} from "./LocationItem.tsx"

export interface LocationListProps{
	locations: LocationItem[];
	activeLocationAddress: string;
	onClick:()=>void;
}

export class LocationList extends React.Component<LocationListProps,undefined>{
	constructor(props:LocationListProps){
		super(props);
	}

	render(){
		let locations = this.props.locations.map( (location) =>{
			let active = this.props.activeLocationAddress == location.address;

			return (<LocationItem address={location.address} 
					timestamp={location.timestamp}
					active={active}
					onClick={this.props.onClick} />
			);
		});

		if(!locations.length){
			// no locations so empty
			return null;
		}

		return(
			<div>
				<span>Saved Locations</span>
				{locations}
			</div>
		)
	}
}