import React, { Component } from 'react';
import './App.css';
import Dashboard from './pages/private/dashboard'
import Login from './pages/public/login'
import {Route  , BrowserRouter as Router , Redirect , Switch} from 'react-router-dom'
import {firebaseAuth} from './data/config'
import create  from './pages/public/Create';


function PrivateRoute({ component: Component, authed, ...rest }) {
	return (
		<Route
			{...rest}
			render={(props) =>
				authed === true ? (
					<Component {...props} />
				) : (
					<Redirect to={{ pathname: '/login', state: { from: props.location } }} />
			)}
		/>
	);
}

function PublicRoute({ component: Component, authed, ...rest }) {
	return (
		<Route
			{...rest}
			render={(props) => (authed === false ? <Component {...props} /> : <Redirect to="/dashboard" />)}
		/>
	);
}

class App extends Component {
	componentDidMount() {
		this.removeListener = firebaseAuth.onAuthStateChanged((user) => {
			if (user) {
				if (user.uid) {
					this.setState({
						loading: false,
						authed: true
					});
				}
			} else {
				this.setState({
					loading: false,
					authed: false
				});
			}
		});
	}

	constructor(props) {
		super(props);
		this.state = {
			authed: false,
			loading: true,
			typeOfUser: ''
		};
	}

	render() {
		return this.state.loading === true ? (
			<div className={'h-100 w-100'}>
				<h1>Cargando...</h1>
			</div>
		) : (
			<div className="h-100">
				<Router>
					<Switch>
						<PublicRoute authed={this.state.authed} path="/login" component={Login} />
						<PrivateRoute authed={this.state.authed} path="/dashboard" component={Dashboard} />
						<PublicRoute authed={this.state.authed} path="/Create" component={create} />
						<Router path={'/'} render={() => <Redirect to={'/Login'} />} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
