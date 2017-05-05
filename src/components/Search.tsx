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
		return (
			<form id="search-bar" onSubmit={this.handleSubmit}>
				<input type="text" id="address" placeholder="Find a location..." value={this.state.text} onChange={this.handleChange} />
			</form>
	  	);
	}
}
