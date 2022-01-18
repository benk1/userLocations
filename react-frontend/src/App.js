import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import NewPlace from './places/pages/NewPlace';
import UserPlaces from './places/pages/UserPlaces';
import MainNavigation from './shared/navigation/MainNavigation';
import Users from './user/pages/Users';

const App = () => {
	return (
		<>
			<MainNavigation />
			<main>
				<Switch>
					<Route exact path="/">
						<Users />
					</Route>

					<Route exact path="/:userId/places">
						<UserPlaces />
					</Route>

					<Route path="/places/new">
						<NewPlace />
					</Route>
					<Redirect to="/" />
				</Switch>
			</main>
		</>
	);
};

export default App;
