import * as React from 'react';

export interface SearchProps {
	onSearch:(any);
}

export class Search extends React.Component<SearchProps, undefined> {
	private currentSearchQuery: string;

	constructor(props:SearchProps) {
		super(props);
	}

	handleChange(event): void {
		this.currentSearchQuery = event.target.value;
	}

	handleSubmit(event) {
		this.props.onSearch(this.currentSearchQuery);
	}

	render() {
		return (
			<form id="search-bar" onSubmit={this.handleSubmit.bind(this)}>
				<input type="text" id="address" placeholder="Find a location..." value={this.currentSearchQuery} onChange={this.handleChange.bind(this)} />
			</form>
	  	);
	}
}
