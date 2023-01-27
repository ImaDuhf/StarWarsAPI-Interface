import React from 'react';
import DataInfoItem from './DataInfoItem';

export default function DataInfo({ option, dataInfo, additionalData }) {
	console.log(additionalData);
	while (option !== '') {
		switch (option) {
			case 'people':
				return (
					<>
						<h2>{dataInfo.name}</h2>
						<p>Height: {dataInfo.height}cm</p>
						<p>Weight: {dataInfo.mass}kg</p>
						<p>Hair Color: {dataInfo.hair_color}</p>
						<p>Skin Tone: {dataInfo.skin_color}</p>
						<p>Eye Color: {dataInfo.eye_color}</p>
						<p>Birth Year: {dataInfo.birth_year}</p>
						<p>Gender: {dataInfo.gender}</p>
						<DataInfoItem additionalData={additionalData} option={option} />
					</>
				);

			case 'planets':
				return (
					<>
						<h2>{dataInfo.name}</h2>
						<p>Rotation period: {dataInfo.rotation_period}h</p>
						<p>Orbital period: {dataInfo.orbital_period} days</p>
						<p>Diameter: {dataInfo.diameter}</p>
						<p>Climate: {dataInfo.climate}</p>
						<p>Gravity: {dataInfo.graviy} standard</p>
						<p>Terrain: {dataInfo.terrain}</p>
						<p>Population: {dataInfo.population}</p>
						{/* Ska loopas genom och läggas till senare */}
						<DataInfoItem additionalData={additionalData} option={option} />
					</>
				);
			case 'films':
				return (
					<>
						<h2>{dataInfo.title}</h2>
						<p>Ep: {dataInfo.episode_id}</p>
						<p>Opening crawl: {dataInfo.opening_crawl}</p>
						<p>Director: {dataInfo.director}</p>
						<p>Producer: {dataInfo.producer}</p>
						<p>Release date: {dataInfo.release_date}</p>
						<DataInfoItem additionalData={additionalData} option={option} />
					</>
				);
			case 'species':
				return (
					<>
						<h2>{dataInfo.name}</h2>
						<p>Classification: {dataInfo.classification}</p>
						<p>Designation: {dataInfo.designation}</p>
						<p>Avg height: {dataInfo.average_height}cm</p>
						<p>Skin colors: {dataInfo.skin_colors}</p>
						<p>Hair colors: {dataInfo.hair_colors}</p>
						<p>Eye colors: {dataInfo.eye_colors}</p>
						<p>Avg lifespan: {dataInfo.average_lifespan} years</p>
						<p>Language: {dataInfo.language}</p>
						<DataInfoItem additionalData={additionalData} option={option} />
					</>
				);
			case 'vehicles':
				return (
					<>
						<h2>{dataInfo.name}</h2>
						<p>Model: {dataInfo.model}</p>
						<p>Manufacturer: {dataInfo.manufacturer}</p>
						<p>Cost: {dataInfo.cost_in_credits}</p>
						<p>Length: {dataInfo.length}m</p>
						<p>Max speed in atmosphere: {dataInfo.max_atmosphering_speed}km/h</p>
						<p>Max Crew size: {dataInfo.crew}</p>
						<p>Max Passenger size: {dataInfo.passengers}</p>
						<p>Max total cargo capacity: {dataInfo.cargo_capacity}kg</p>
						<p>Consumables: {dataInfo.consumables}</p>
						<p>Vehicle class: {dataInfo.vehicle_class}</p>
						<DataInfoItem additionalData={additionalData} option={option}  />
					</>
				);
			case 'starships':
				return (
					<>
						<h2>{dataInfo.name}</h2>
						<p>Model: {dataInfo.model}</p>
						<p>Manufacturer: {dataInfo.manufacturer}</p>
						<p>Cost: {dataInfo.cost_in_credits}</p>
						<p>Length: {dataInfo.length}m</p>
						<p>Max Speed in atmosphere: {dataInfo.max_atmosphering_speed}km</p>
						<p>Average crew size: {dataInfo.crew}</p>
						<p>Max Total Passengers: {dataInfo.passengers} passengers</p>
						<p>Max Total Cargo Capacity: {dataInfo.cargo_capacity}kg</p>
						<p>Consumables: {dataInfo.consumables}</p>
						<p>Hyperdrive rating: {dataInfo.hyperdrive_rating}</p>
						<p>{dataInfo.MGLT} Megalight/h</p>
						<p>Starship classification: {dataInfo.starship_class}</p>
						
						<DataInfoItem additionalData={additionalData} option={option} />

					</>
				);
		}
	}
}
