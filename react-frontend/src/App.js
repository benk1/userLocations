import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import NewPlace from './places/pages/NewPlace';
import Users from './user/pages/Users';

const App = () => {
	return (
		<Switch>
			<Route exact path="/">
				<Users />
			</Route>

			<Route path="/places/new">
				<NewPlace />
			</Route>
			<Redirect to="/" />
		</Switch>
	);
};

export default App;
