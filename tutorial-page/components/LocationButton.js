var React = require('react');
var LocationItem = require('./LocationItem');

var LocationButton = React.createClass({
	handleClick(){
		this.props.address = navigator.geolocation.getCurrentPosition(function(position) {
			alert(position);
		})
		this.props.onClick(this.props.address);
	},

	render() {
		var cn = "list-group-item";

		if(this.props.active){
			cn += " active-location";
		}

		return (
			<a className={cn} onClick={this.handleClick}>
				Set Current Location
			</a>
		);

	}
});

module.exports = LocationButton;