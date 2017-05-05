import * as React from 'react';

export interface SearchProps {
	onSearch:(any);
}
export interface SearchState{
	text:string;
}

export class Search extends React.Component<SearchProps, SearchState> {
	private currentSearchQuery: string;

	constructor(props:SearchProps) {
		super(props);
		this.state={text:""};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event): void {
		this.setState({text: event.target.value});
	}

	handleSubmit(event) {
		// prevent the form from reloading the page
		event.preventDefault();
		this.props.onSearch(this.state.text);
	}

	render() {
		const input_style = {
	        background: "linear-gradient(to bottom, #FFFFFF, #EEEEEE)",
	        border: "solid 2px #E5E5E5",
	        "-moz-box-shadow": "rgba(0,0,0,0.1) 0 0 8px",
	        "-webkit-box-shadow": "rgba(0,0,0,0.1) 0 0 8px",
	        "box-shadow": "rgba(0,0,0,0.1) 0 0 8px",
	        width: "200px",
		}
		return (
			<form id="search-bar" onSubmit={this.handleSubmit}>
				<input style={input_style} type="text" id="address" placeholder="Find a location..." value={this.state.text} onChange={this.handleChange} />
			</form>
	  	);
	}
}
