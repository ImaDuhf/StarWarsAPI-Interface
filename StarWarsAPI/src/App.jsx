import './App.css';
import { useState } from 'react';
import Nav from './Nav';
import Results from './Results';

function App() {
	// fetch('https://swapi.dev/api/{option}/?search={query}')
	// 		.then((resp) => resp.json())
	// 		.then((data) => console.log(data));

	const [option, setOption] = useState('');
	const [data, setData] = useState([]);
	const [pageCount, SetPageCount] = useState('');

	const getData = async (option) => {
		await fetch(`https://swapi.dev/api/${option}/`)
			.then((resp) => resp.json())
			.then((data) => {
				setData(data);
				setOption(option);
				SetPageCount(`1/${Math.ceil(data.count / 10)}`);
			});
	};

	const changePage = async (dir) => {
		if (dir == 'next') {
			await fetch(data.next)
				.then((resp) => resp.json())
				.then((data) => setData(data));
			SetPageCount(`1/${Math.floor(data.count / 10)}`);
		} else if (dir == 'prev') {
			await fetch(data.previous)
				.then((resp) => resp.json())
				.then((data) => setData(data));
			SetPageCount(`1/${Math.floor(data.count / 10)}`);
		}
	};

	return (
		<div className="App">
			<h1>Star Wars API Interface</h1>
			<Nav setOption={setOption} getData={getData} />
			<p>{option}</p>
			<div className="">
				<Results data={data} option={option} />
				<button onClick={() => changePage('prev')}>&lt;</button>
				<p>{pageCount}</p>
				<button onClick={() => changePage('next')}>&gt;</button>
			</div>
		</div>
	);
}

export default App;
