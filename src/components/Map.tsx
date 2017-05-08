import * as React from "react";
declare let google;
import { withGoogleMap, GoogleMap, Marker, InfoWindow} from "react-google-maps";

import SearchBox from "react-google-maps/lib/places/SearchBox"
export interface MapProps{
	lat:number;
	long:number;
}

export interface MapState{
	markers;
}


export class Map extends React.Component<MapProps,MapState>{
	private mapRef;
	private lastLocation;
	constructor(props:MapProps){
		super(props);
		this.mapRef = null;
		this.lastLocation = null;
		this.state = {markers:[]};
		this.handleMapMounted = this.handleMapMounted.bind(this);
		this.setRestaurants = this.setRestaurants.bind(this);
		this.handleMarkerClick = this.handleMarkerClick.bind(this);
  		this.handleMarkerClose = this.handleMarkerClose.bind(this);
  		this.handleIdle = this.handleIdle.bind(this);
	}

	handleMapMounted(map){
		this.mapRef = map;
	}

	setRestaurants(){
		let service = new google.maps.places.PlacesService(this.mapRef.getDiv());
		service.nearbySearch({
			location: {lat:this.props.lat, lng:this.props.long},
			radius:9000,
			type: 'restaurant',
			keyword: 'vegetarian'

		}, (results,status)=>{
			if(status == google.maps.places.PlacesServiceStatus.OK){
				let restaurants = [];
				for( let i = 0; i < results.length; i++){
					let place = results[i];
					let restaurant = { 
						showInfo: false, 
						infoContent: (<div>
							<h3>{place.name}</h3>
							<p>near: {place.vicinity}</p>
						</div>),
						location: {lat: place.geometry.location.lat(),
								   lng: place.geometry.location.lng()}
						};
					restaurants.push(restaurant);
				}
				this.lastLocation = {lat: this.props.lat, long: this.props.long};
				this.setState({markers: restaurants});
			}
		})
	}

	handleMarkerClick(targetMarker) {
	    this.setState({
	      	markers: this.state.markers.map(marker => {
	        	if (marker === targetMarker) {
	          		return {
	            		...marker,
	            		showInfo: true,
	          		};
	        	}
	        	return marker;
	      	}),
	    });
	 }

	handleMarkerClose(targetMarker) {
	    this.setState({
	      	markers: this.state.markers.map(marker => {
	        	if (marker === targetMarker) {
	          		return {
	           			...marker,
	            		showInfo: false,
	          		};
	        	}
	        	return marker;
	      	}),
	    });
	}

	handleIdle(){
		if(this.mapRef != null){
			if(this.lastLocation == null || (this.lastLocation.lat != this.props.lat && this.lastLocation.long != this.props.long)){
				this.setRestaurants();
			}
		}
		
	}


	render(){
		const SimpleGoogleMap = withGoogleMap(props =>(
	<GoogleMap
		ref={props.onMapMounted}
		defaultZoom={13}
		onIdle={props.onIdle}
		center={props.center}
	>
		{props.markers.map((marker,index)=>{
			return(<Marker key={index}
					position={marker.location}
					onClick={()=>props.onMarkerClick(marker)}
			> { marker.showInfo && (
				<InfoWindow onCloseClick={() => props.onMarkerClose(marker)}>
            		<div>{marker.infoContent}</div>
          		</InfoWindow>
				)}
			</Marker>);
		})}
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
				center={{lat:this.props.lat, lng:this.props.long}}
				markers={this.state.markers}
				onIdle={this.handleIdle}
				onMapMounted={this.handleMapMounted}
				onMarkerClick={this.handleMarkerClick}
        		onMarkerClose={this.handleMarkerClose}
			/>
			</div>
		);
	}
	
	
}