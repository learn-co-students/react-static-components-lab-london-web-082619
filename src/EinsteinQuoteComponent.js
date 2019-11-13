import React, { Component } from 'react';

export class EinsteinQuoteComponent extends Component {
	render() {
		return (
			<div className="bar" id="einstein">
				<i>
					<p>
						&quot;Life is like riding a bicycle. To keep your balance you must
						keep moving&quot;
						{this.props.articleText}
					</p>
				</i>
				<br />
				&#9;-Einstein
			</div>
		);
	}
}
