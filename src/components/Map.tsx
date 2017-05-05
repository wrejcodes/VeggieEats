import * as React from "react";

import { withGoogleMap, GoogleMap, Marker} from "react-google-maps";

export interface MapProps{
	lat:number;
	long:number;
}



export class Map extends React.Component<MapProps,undefined>{
	private lat: number;
	private long: number;
	private lastLat: number;
	private lastLong: number;

	constructor(props:MapProps){
		super(props);
 		this.lat = this.props.lat;
 		this.long = this.props.long;
	}

	render(){
		const SimpleGoogleMap = withGoogleMap(props =>(
	<GoogleMap
		defaultZoom={13}
		defaultCenter={{lat: 31.3303, lng: -89.3357 }}
	/>
));
		return(
			<div style={{height: `500px`, width: `500px`}} >
			<SimpleGoogleMap
				containerElement={
					<div style={{height: `100%`}} />
				}
				mapElement={
					<div style={{height: `100%`}} />
				}
			/>
			</div>
		);
	}
	
	
}