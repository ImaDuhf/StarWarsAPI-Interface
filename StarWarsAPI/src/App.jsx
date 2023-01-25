import './App.css';
import { useState } from 'react';

function App() {
	// fetch('https://swapi.dev/api/people/')
	// 		.then((resp) => resp.json())
	// 		.then((data) => console.log(data));

	const [option, setOption] = useState('');

	return (
		<div className="App">
			<h1>Star Wars API Interface</h1>
		</div>
	);
}

export default App;
