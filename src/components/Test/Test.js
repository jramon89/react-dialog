import React, { Component } from 'react';
import Layout from '../Layout/Layout';
import Alert from '../Alert/Alert';

export default
class Test extends Component{

	constructor(props){
		super(props);
		this.state={
			show: false
		}
	}

	onToggle() {
		this.setState({
			show: !this.state.show
		});
	}

	render() {
		const { show } = this.state;
		return(
			<div>
				<Layout
					title="Dialog component">
					<div>
						<a href="#" onClick={this.onToggle.bind(this)}>
							Show dialog
						</a>	
						<Alert 
							header="Alert title"
							show={show}
							onToggle={this.onToggle.bind(this)}
							maxWidth={500}>
							<div>
								Content alert...
							</div>
						</Alert>
					</div>		
				</Layout>

			</div>
		);
	}
}
