import * as React from "react";

import { google, withGoogleMap, GoogleMap, Marker} from "react-google-maps";

import SearchBox from "react-google-maps/lib/places/SearchBox"
export interface MapProps{
	lat:number;
	long:number;
}



export class Map extends React.Component<MapProps,undefined>{

	constructor(props:MapProps){
		super(props);
	}

	render(){
		const SimpleGoogleMap = withGoogleMap(props =>(
	<GoogleMap
		defaultZoom={13}
		center={{lat: this.props.lat, lng: this.props.long }}
	>
	</GoogleMap>
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