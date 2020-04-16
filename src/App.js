import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	const load = () => {
		MemberStack.onReady.then(function(member) {
			// do things with the member object
			member['email'];
			member['name'];

			// member's specific page if set.
			member.memberPage;

			// check if member is logged in
			member.loggedIn; // returns true or false
		});
	};

	useEffect(() => {
		load();
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
