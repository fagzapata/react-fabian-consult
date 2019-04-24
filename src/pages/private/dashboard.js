import React, { Component } from 'react';
import Sidebar from '../../components/sidebar';
import Navbar from '../../components/navbar';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Panel from '../private/panel';

export class Dashboard extends Component {
	render() {
		return (
			<Router>
				<div className={'d-flex w-100 h-100'}>
					<Navbar />
					<Sidebar />
					<Switch>
						<Route path="/dashboard" component={Panel} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default Dashboard;
