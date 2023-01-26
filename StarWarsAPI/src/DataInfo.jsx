import React from 'react';
import DataInfoItem from './DataInfoItem';

export default function DataInfo({ option, dataInfo, additionalData }) {
	console.log(additionalData);
	while (option !== '') {
		switch (option) {
			case 'people':
				return (
					<div>
						<h2>{dataInfo.name}</h2>
						<p>Height: {dataInfo.height}cm</p>
						<p>Weight: {dataInfo.mass}kg</p>
						<p>Hair Color: {dataInfo.hair_color}</p>
						<p>Skin Tone: {dataInfo.skin_color}</p>
						<p>Eye Color: {dataInfo.eye_color}</p>
						<p>Birth Year: {dataInfo.birth_year}</p>
						<p>Gender: {dataInfo.gender}</p>
						<p>Home Planet: {additionalData.name}</p>
					</div>
				);

			case 'planets':
				return (
					<div>
						<h2>{dataInfo.name}</h2>
						<p>Rotation period: {dataInfo.rotation_period}h</p>
						<p>Orbital period: {dataInfo.orbital_period} days</p>
						<p>Diameter: {dataInfo.diameter}</p>
						<p>Climate: {dataInfo.climate}</p>
						<p>Gravity: {dataInfo.graviy} standard</p>
						<p>Terrain: {dataInfo.terrain}</p>
						<p>Population: {dataInfo.population}</p>
						{/* Ska loopas genom och läggas till senare */}
						<DataInfoItem additionalData={additionalData} option={option} key={additionalData[0].name} />
					</div>
				);
			case 'films':
				return (
					<div>
						<h2>{dataInfo.title}</h2>
						<p>{dataInfo.episode_id}</p>
						<p>{dataInfo.opening_crawl}</p>
						<p>{dataInfo.director}</p>
						<p>{dataInfo.producer}</p>
						<p>{dataInfo.release_date}</p>
						<DataInfoItem additionalData={additionalData} option={option} key={additionalData[0].title} />
					</div>
				);
			case 'species':
				return (
					<div>
						<h2>{dataInfo.name}</h2>
						<p>{dataInfo.classification}</p>
						<p>{dataInfo.designation}</p>
						<p>{dataInfo.average_height}cm</p>
						<p>{dataInfo.skin_colors}</p>
						<p>{dataInfo.hair_colors}</p>
						<p>{dataInfo.eye_colors}</p>
						<p>{dataInfo.average_lifespan} years</p>
						<p>{dataInfo.homeworld}</p>
						<p>{dataInfo.language}</p>
					</div>
				);

			case 'vehicles':
				return (
					<div>
						<h2>{dataInfo.name}</h2>
						<p>{dataInfo.model}</p>
						<p>{dataInfo.manufacturer}</p>
						<p>{dataInfo.cost_in_credits}</p>
						<p>{dataInfo.length}</p>
						<p>{dataInfo.max_atmosphering_speed}</p>
						<p>{dataInfo.crew}</p>
						<p>{dataInfo.passengers}</p>
						<p>{dataInfo.cargo_capacity}</p>
						<p>{dataInfo.consumables}</p>
						<p>{dataInfo.vehicle_class}</p>
						<p>{dataInfo.pilots}</p>
						<p>{dataInfo.films}</p>
						<DataInfoItem additionalData={additionalData} option={option} key={crypto.randomUUID() + 1} />
					</div>
				);
			case 'starships':
				return (
					<div>
						<h2>{dataInfo.name}</h2>
						<p>{dataInfo.model}</p>
						<p>{dataInfo.manufacturer}</p>
						<p>{dataInfo.cost_in_credits}</p>
						<p>{dataInfo.length}</p>
						<p>{dataInfo.max_atmosphering_speed}</p>
						<p>{dataInfo.crew}</p>
						<p>{dataInfo.passengers}</p>
						<p>{dataInfo.cargo_capacity}</p>
						<p>{dataInfo.consumables}</p>
						<p>{dataInfo.hyperdrive_rating}</p>
						<p>{dataInfo.MGLT}</p>
						<p>{dataInfo.starship_class}</p>
						<p>{dataInfo.pilots}</p>
						<p>{dataInfo.films}</p>
					</div>
				);
		}
	}
}
