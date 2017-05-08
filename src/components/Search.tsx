import * as React from 'react';

import PlacesAutoComplete, { geocodeByAddress } from "react-places-autocomplete";

export interface Coordinates {
	lat:number;
	lng:number;
}

export interface SearchProps {
	onSearch:(any);
}
export interface SearchState{
	address:string;
}

export class Search extends React.Component<SearchProps, SearchState> {
	private currentSearchQuery: string;
	private onChange: (address:string) => void;

	constructor(props:SearchProps) {
		super(props);
		this.state={address:""};
		this.onChange = (address) => this.setState({address});
		this.handleSubmit = this.handleSubmit.bind(this);
	}


	handleSubmit(event) {
		// prevent the form from reloading the page
		event.preventDefault();

		geocodeByAddress(this.state.address, (err,latLng)=>{
			if (err) {
				console.log(err);
			}
			else {
				this.props.onSearch({lat:latLng.lat, long:latLng.lng})
			}
		});
	}

	render() {
		const form_style = {
			"background-color": "#fffbf8",
			padding: "5px",
			width: "330px",
			display: "flex",
			"flex-direction": "row",
			"justify-content":"space-between",
			//margin: "100px auto",
			"-webkit-box-sizing": "border-box",
			"-moz-box-sizing": "border-box",
			"box-sizing": "border-box",
			"border-radius": "10px",
			"-webkit-box-shadow": "0 2px 4px 0 rgba(72, 72, 72, 0.83), 0 10px 15px 0 rgba(126, 126, 126, 0.12), 0 -2px 6px 1px rgba(199, 199, 199, 0.55) inset, 0 2px 4px 2px rgba(255, 255, 255, 0.83) inset",
			"-moz-box-shadow": "0 2px 4px 0 rgba(72, 72, 72, 0.83), 0 10px 15px 0 rgba(126, 126, 126, 0.12), 0 -2px 6px 1px rgba(199, 199, 199, 0.55) inset, 0 2px 4px 2px rgba(255, 255, 255, 0.83) inset",
			"box-shadow": "0 2px 4px 0 rgba(72, 72, 72, 0.83), 0 10px 15px 0 rgba(126, 126, 126, 0.12), 0 -2px 6px 1px rgba(199, 199, 199, 0.55) inset, 0 2px 4px 2px rgba(255, 255, 255, 0.83) inset",
		}
		const input_style = {
			input:{
				width: "250px",
				"font-size": "20px",
				height: "20px",
				"padding-left": "15px",
				border: "none",
				color: "#0F0D0D",
				"font-weight": "500",
				"background-color": "#E2EFF7",
				"-webkit-box-shadow": "0 -2px 2px 0 rgba(199, 199, 199, 0.55), 0 1px 1px 0 #fff, 0 2px 2px 1px #fafafa, 0 2px 4px 0 #b2b2b2 inset, 0 -1px 1px 0 #f2f2f2 inset, 0 15px 15px 0 rgba(41, 41, 41, 0.09) inset",
				"-moz-box-shadow": "0 -2px 2px 0 rgba(199, 199, 199, 0.55), 0 1px 1px 0 #fff, 0 2px 2px 1px #fafafa, 0 2px 4px 0 #b2b2b2 inset, 0 -1px 1px 0 #f2f2f2 inset, 0 15px 15px 0 rgba(41, 41, 41, 0.09) inset",			
				"box-shadow": "0 -2px 2px 0 rgba(199, 199, 199, 0.55), 0 1px 1px 0 #fff, 0 2px 2px 1px #fafafa, 0 2px 4px 0 #b2b2b2 inset, 0 -1px 1px 0 #f2f2f2 inset, 0 15px 15px 0 rgba(41, 41, 41, 0.09) inset"
			},
			autocompleteItem:{
				"font-size": "17px"
			}

	        
		}
		const button_style = {
			width: "35px",
			height: "30px",
			"margin-top":"5px",
			"background-image": "url(https://cdn2.iconfinder.com/data/icons/media-and-navigation-buttons-square/512/Button_15-512.png)",
			"background-repeat": "no-repeat",
			"background-position": "center",
			"background-color": "transparent",
			"-webkit-background-size": "50px 50px",
			"background-size": "50px 50px",
			border: "none",
			cursor: "pointer",
		}

		const inputProps = {
			value: this.state.address,
			onChange: this.onChange
		}
		return (
			<form style={form_style} id="search-bar" onSubmit={this.handleSubmit}>
				<PlacesAutoComplete inputProps={inputProps} styles={input_style}/>
				<button style={button_style} type="submit"  value="search">&nbsp;</button>
				
			</form>
	  	);
	}
}
