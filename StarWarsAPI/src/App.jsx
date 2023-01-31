import './App.css';
import { useState, useRef } from 'react';
import Nav from './Nav';
import Results from './Results';
import DataInfo from './DataInfo';

function App() {
	const [option, setOption] = useState('');
	const [data, setData] = useState({});
	const [dataInfo, setDataInfo] = useState({});
	const [additionalData, setAdditionalData] = useState({});
	const [pageCount, SetPageCount] = useState('');
	const [currentPage, SetCurrentPage] = useState(1);

	const searchRef = useRef();
	const dataContainer = useRef();

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
		const mainData = await fetch(`https://swapi.dev/api/${option}/`).then((resp) => resp.json());
		setData(mainData);
		const dataItem = await fetch(mainData.results[0].url).then((resp) => resp.json());
		setDataInfo(dataItem);
		const missingData = await getMissingData(dataItem, option);
		setAdditionalData(missingData);
		setOption(option);
		// Data Container är osynlig på sidostart
		dataContainer.current.classList.remove('data-not-visible');
		SetCurrentPage(1);
		SetPageCount(`1/${Math.ceil(mainData.count / 10)}`);
	};

	const getMissingData = async (data, option) => {
		switch (option) {
			case 'people':
				let peopleHomeworld = await fetch(data.homeworld).then((resp) => resp.json());
				let peopleFilms = await Promise.all(
					data.films.map(async (film) => {
						return await fetch(film).then((resp) => resp.json());
					})
				);
				document.body.className = "backgroundOne";
				return [].concat(peopleHomeworld, peopleFilms)
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
				document.body.className = "backgroundTwo";
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
				document.body.className = "backgroundThree"
				return filmsCharacters.concat(filmsPlanets, filmsStarships, filmsVehicles, filmsSpecies);
			case 'species':
				let returnArray = [];
				if (data.homeworld !== null) {
					let speciesHomeworld = await fetch(data.homeworld).then((resp) => resp.json());
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
					returnArray = returnArray.concat(speciesHomeworld, speciesPeople, speciesFilms);
				} else if(data.homeworld === null) {
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
					returnArray = returnArray.concat(speciesPeople, speciesFilms);
				}
				document.body.className = "backgroundFour";
				return returnArray;
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
				document.body.className = "backgroundFive";
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
				document.body.className = "backgroundSix";
				return starshipsPeople.concat(starshipsFilms);
		}
	};

	const changePage = async (dir) => {
		if (dir == 'next') {
			let nextData = await fetch(data.next).then((resp) => resp.json())
			setData(nextData);
			countPages(dir);
		} else if (dir == 'prev') {
			let prevData = await fetch(data.previous).then((resp) => resp.json())
			setData(prevData);
			countPages(dir);
		}
	};

	const showInfo = async (item) => {
		let newData = await getMissingData(item, option);
		setDataInfo(item);
		setAdditionalData(newData);
	};

	const searchData = async (query) => {
		if (query.trim() !== '') {
			let queryData = await fetch(`https://swapi.dev/api/${option}/?search=${query}`).then(resp=>resp.json());
			let newData  = await getMissingData(queryData.results[0], option)
			setDataInfo(queryData.results[0]);
			setAdditionalData(newData);
		}
	}

	return (
		<div className="App">
			<Nav getData={getData} />
			<h1 className='title'>Star Wars Jedi Archives</h1>
			<div className='data-container data-not-visible' ref={dataContainer}>
				<div className="item-column">
					<div className='search-container'>
						<input type="text" className='search-field' ref={searchRef} placeholder={option} />
						<button className='search-btn' onClick={() => searchData(searchRef.current.value)}>Search</button>
					</div>
					<Results data={data} option={option} showInfo={showInfo} />
					<div className='page'>
						<button className='page-btn' onClick={() => changePage('prev')}>&lt;</button>
						<p>{pageCount}</p>
						<button className='page-btn' onClick={() => changePage('next')}>&gt;</button>
					</div>
				</div>
				<div className='data-column'>			
					<DataInfo option={option} dataInfo={dataInfo} additionalData={additionalData} />
				</div>
			</div>
		</div>
	);
}

export default App;
