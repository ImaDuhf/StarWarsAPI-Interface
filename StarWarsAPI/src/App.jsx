import './App.css';
import { useState } from 'react';
import Nav from './Nav';
import Results from './Results';
import DataInfo from './DataInfo';

function App() {
	// fetch('https://swapi.dev/api/{option}/?search={query}')
	// 		.then((resp) => resp.json())
	// 		.then((data) => console.log(data));

	const [option, setOption] = useState('');
	const [data, setData] = useState({});
	const [dataInfo, setDataInfo] = useState({});
	const [additionalData, setAdditionalData] = useState({});
	const [pageCount, SetPageCount] = useState('');
	const [currentPage, SetCurrentPage] = useState(1);

	

	const countPages = (dir) => {
		if(dir == "next") {
			SetCurrentPage(currentPage + 1)
			SetPageCount(`${currentPage + 1}/${Math.ceil(data.count / 10)}`)
		} else if(dir == "prev") {
			SetCurrentPage(currentPage - 1)
			SetPageCount(`${currentPage - 1}/${Math.ceil(data.count / 10)}`)
		}
	}

	const getData = async (option) => {

		try {	
			const data1 = await fetch(`https://swapi.dev/api/${option}/`).then(resp=>resp.json());
			setData(data1);
			const data2 = await fetch(data1.results[0].url).then(resp=>resp.json());
			setDataInfo(data2);
			console.log([data2.residents + data2.films]);
			const data3 = await getMissingData(data2, option);
			setAdditionalData(data3);
			
			setOption(option);
			SetPageCount(`${currentPage}/${Math.ceil(data.count / 10)}`);
		} catch (error) {
			console.error(error)
		}
	};

	const getMissingData = async (data, option) => {
		switch (option) {
			case 'people':
				return await fetch(data.homeworld).then(resp=>resp.json());
			case 'planets':
				data.residents + data.films;
				let temp = await Promise.all(
					data.residents.map(async(resident) => {
						return await fetch(resident).then(resp => resp.json())
				}));
				let temp2 = await Promise.all(
					data.films.map(async(film) => {
						return await fetch(film).then(resp => resp.json())
				}));

				temp = temp.concat(temp2)
				console.log(temp);
		}
	}

	const changePage = async (dir) => {
		if (dir == 'next') {
			await fetch(data.next)
				.then((resp) => resp.json())
				.then((data) => {
					setData(data)
					// SetCurrentPage(currentPage + 1)
					countPages(dir)
					console.log(currentPage)
				});
				// SetCurrentPage(currentPage + 1)
				// SetPageCount(`${currentPage -1}/${Math.ceil(data.count / 10)}`)
				

		} else if (dir == 'prev') {
			await fetch(data.previous)
				.then((resp) => resp.json())
				.then((data) => {
					setData(data)
					countPages(dir)
					console.log(currentPage)
					// SetCurrentPage(currentPage - 1)
					// SetPageCount(`${currentPage}/${Math.ceil(data.count / 10)}`)
				});

			}
	};

	const showInfo = (item) => {
		console.log(item);
	}
	// const getMissingData = async (option) => {
	// 	switch(option) {
	// 		case "planets":
	// 			for (let i = 0; i < dataInfo.residents.length; i++) {
	// 				await fetch(dataInfo.residents[i]).then(resp => resp.json()).then(data => {
	// 					return data;
	// 				})					
	// 			}
	// 		case "people":
	// 			await fetch(dataInfo.homeworld).then(resp => resp.json()).then(data => {
	// 				return data;
	// 			})
	// 	}
	// }

	return (
		<div className="App">
			<h1>Star Wars API Interface</h1>
			<Nav getData={getData} />
			<p>{option}</p>
			<div className="">
				<Results data={data} option={option} showInfo={showInfo} />
				<button onClick={() => changePage('prev')}>&lt;</button>
				<p>{pageCount}</p>
				<button onClick={() => changePage('next')}>&gt;</button>
			</div>

		<DataInfo option={option} dataInfo={dataInfo} additionalData={additionalData} />
		</div>
	);
}

export default App;
