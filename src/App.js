import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Script from 'react-load-script';
import loadScript from './loaderScript';

function App() {
	useEffect(() => {
		const ms = document.createElement('script');

		ms.src = 'https://api.memberstack.io/static/memberstack.js?custom';

		ms.setAttribute('data-memberstack-id', 'bdd57143506b494cfaf438630bb33ab3');

		ms.onload = (member) => {
			console.log(member);
			// MemberStack.onReady.then(function(member) {
			//   // do things with the member object
			//   // member["email"]
			//   // member["name"]
			//   // member's specific page if set.
			//   member.memberPage();
			//   // check if member is logged in
			//   member.loggedIn(); // returns true or false
			// });
		};
		// ms.async = true;

		document.body.appendChild(ms);

		// const member = localStorage.getItem('memberstack');

		// let data = document.createAttribute('data-memberstack-id');
		// data.value = 'bdd57143506b494cfaf438630bb33ab3';

		return () => {
			document.body.removeChild(ms);
		};
	}, []);

	const Click = () => {
		// MemberStack.onReady.then(function(member) {
		// 	var membership = member.membership;
		// 	membership.id; // current membership
		// 	membership.status; // active, canceled, past_due, unpaid, trialing
		// 	membership.current_period_end; // unix timestamp
		// 	membership.cancel_at_period_end; // true or false
		// });
	};

	return (
		<div className="App">
			<button onClick={Click}>Click</button>
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<form data-ms-form="login">
					<input data-ms-member="email" />
					<input data-ms-member="password" />
					<input type="submit" value="Sign up" />
				</form>
			</header>
		</div>
	);
}

export default App;
