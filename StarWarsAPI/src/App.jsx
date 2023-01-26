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
		if (dir == 'next') {
			SetCurrentPage(currentPage + 1);
			SetPageCount(`${currentPage + 1}/${Math.ceil(data.count / 10)}`);
		} else if (dir == 'prev') {
			SetCurrentPage(currentPage - 1);
			SetPageCount(`${currentPage - 1}/${Math.ceil(data.count / 10)}`);
		}
	};

	const getData = async (option) => {
		try {
			const data1 = await fetch(`https://swapi.dev/api/${option}/`).then((resp) => resp.json());
			setData(data1);
			console.log('Phase 1 complete');
			const data2 = await fetch(data1.results[0].url).then((resp) => resp.json());
			setDataInfo(data2);
			console.log('Phase 2 complete');
			const data3 = await getMissingData(data2, option);
			setAdditionalData(data3);
			console.log('Phase 3 complete');
			setOption(option);
			SetPageCount(`${currentPage}/${Math.ceil(data1.count / 10)}`);
		} catch (error) {
			console.error(error);
		}
	};

	const getMissingData = async (data, option) => {
		switch (option) {
			case 'people':
				return await fetch(data.homeworld).then((resp) => resp.json());
			// Lägg till filmer också
			case 'planets':
				let planetResidents = await Promise.all(
					data.residents.map(async (resident) => {
						return await fetch(resident).then((resp) => resp.json());
					})
				);
				let planetFilms = await Promise.all(
					data.films.map(async (film) => {
						return await fetch(film).then((resp) => resp.json());
					})
				);
				return (planetResidents = planetResidents.concat(planetFilms));
			case 'films':
				let filmsCharacters = await Promise.all(
					data.characters.map(async (character) => {
						return await fetch(character).then((resp) => resp.json());
					})
				);
				let filmsPlanets = await Promise.all(
					data.planets.map(async (planet) => {
						return await fetch(planet).then((resp) => resp.json());
					})
				);
				let filmsStarships = await Promise.all(
					data.starships.map(async (starship) => {
						return await fetch(starship).then((resp) => resp.json());
					})
				);
				let filmsVehicles = await Promise.all(
					data.vehicles.map(async (vehicle) => {
						return await fetch(vehicle).then((resp) => resp.json());
					})
				);
				let filmsSpecies = await Promise.all(
					data.species.map(async (specimen) => {
						return await fetch(specimen).then((resp) => resp.json());
					})
				);
				return filmsCharacters.concat(filmsPlanets, filmsStarships, filmsVehicles, filmsSpecies);
			case 'species':
				let speciesPeople = await Promise.all(
					data.people.map(async (person) => {
						return await fetch(person).then((resp) => resp.json());
					})
				);
				let speciesFilms = await Promise.all(
					data.films.map(async (film) => {
						return await fetch(film).then((resp) => resp.json());
					})
				);
				return speciesPeople.concat(speciesFilms);
			case 'vehicles':
				let vehiclesPeople = await Promise.all(
					data.pilots.map(async (vehiclesPeople) => {
						return await fetch(vehiclesPeople).then((resp) => resp.json());
					})
				);

				let vehiclesFilms = await Promise.all(
					data.films.map(async (vehiclesFilms) => {
						return await fetch(vehiclesFilms).then((resp) => resp.json());
					})
				);
				return vehiclesPeople.concat(vehiclesFilms);
			case 'starships':
				let starshipsPeople = await Promise.all(
					data.pilots.map(async (vehiclesPeople) => {
						return await fetch(vehiclesPeople).then((resp) => resp.json());
					})
				);

				let starshipsFilms = await Promise.all(
					data.films.map(async (vehiclesFilms) => {
						return await fetch(vehiclesFilms).then((resp) => resp.json());
					})
				);
				return starshipsPeople.concat(starshipsFilms);
		}
	};

	const changePage = async (dir) => {
		if (dir == 'next') {
			await fetch(data.next)
				.then((resp) => resp.json())
				.then((data) => {
					setData(data);
					// SetCurrentPage(currentPage + 1)
					countPages(dir);
					console.log(currentPage);
				});
			// SetCurrentPage(currentPage + 1)
			// SetPageCount(`${currentPage -1}/${Math.ceil(data.count / 10)}`)
		} else if (dir == 'prev') {
			await fetch(data.previous)
				.then((resp) => resp.json())
				.then((data) => {
					setData(data);
					countPages(dir);
					console.log(currentPage);
					// SetCurrentPage(currentPage - 1)
					// SetPageCount(`${currentPage}/${Math.ceil(data.count / 10)}`)
				});
		}
	};

	const showInfo = (item) => {
		console.log(item);
	};
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
