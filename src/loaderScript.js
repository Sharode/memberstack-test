import React, { useState } from 'react';
import Script from 'react-load-script';

export default function LoaderScript() {
	const [ state, setState ] = useState({ scriptLoaded: '', scriptError: '' });

	const handleScriptCreate = () => {
		setState({
			...state,
			scriptLoaded: false
		});
		// this.setState({ scriptLoaded: false })
	};

	const handleScriptError = () => {
		setState({
			...state,
			scriptError: true
		});
		this.setState({ scriptError: true });
	};

	const handleScriptLoad = () => {
		setState({
			...state,
			scriptLoaded: true
		});
		this.setState({ scriptLoaded: true });
	};

	if (state.scriptLoaded) {
		console.log(test);
	}
	// console.log;
	return (
		<React.Fragment>
			<Script
				url="https://api.memberstack.io/static/memberstack.js?custom"
				data-memberstack-id="bdd57143506b494cfaf438630bb33ab3"
				onCreate={handleScriptCreate()}
				onError={handleScriptError()}
				onLoad={handleScriptLoad()}
			/>
		</React.Fragment>
		//
	);
}
