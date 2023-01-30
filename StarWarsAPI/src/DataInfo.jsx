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
						<p>Height: <span>{dataInfo.height}cm</span></p>
						<p>Weight: <span>{dataInfo.mass}kg</span></p>
						<p>Hair Color: <span>{dataInfo.hair_color}</span></p>
						<p>Skin Tone: <span>{dataInfo.skin_color}</span></p>
						<p>Eye Color: <span>{dataInfo.eye_color}</span></p>
						<p>Birth Year: <span>{dataInfo.birth_year}</span></p>
						<p>Gender: <span>{dataInfo.gender}</span></p>
						<DataInfoItem additionalData={additionalData} option={option} />
					</>
				);

			case 'planets':
				return (
					<>
						<h2>{dataInfo.name}</h2>
						<p>Rotation period: <span>{dataInfo.rotation_period}h</span></p>
						<p>Orbital period: <span>{dataInfo.orbital_period} days</span></p>
						<p>Diameter: <span>{dataInfo.diameter}km</span></p>
						<p>Climate: <span>{dataInfo.climate}</span></p>
						<p>Gravity: <span>{dataInfo.graviy} standard</span></p>
						<p>Terrain: <span>{dataInfo.terrain}</span></p>
						<p>Population: <span>{dataInfo.population}</span></p>
						{/* Ska loopas genom och läggas till senare */}
						<DataInfoItem additionalData={additionalData} option={option} />
					</>
				);
			case 'films':
				return (
					<>
						<h2>{dataInfo.title}</h2>
						<p>Episode:	<span>{dataInfo.episode_id}</span></p>
						<p>Opening crawl: <span>{dataInfo.opening_crawl}</span></p>
						<p>Director: <span>{dataInfo.director}</span></p>
						<p>Producer: <span>{dataInfo.producer}</span></p>
						<p>Release date: <span>{dataInfo.release_date}</span></p>
						<DataInfoItem additionalData={additionalData} option={option} />
					</>
				);
			case 'species':
				return (
					<>
						<h2>{dataInfo.name}</h2>
						<p>Classification: <span>{dataInfo.classification}</span></p>
						<p>Designation: <span>{dataInfo.designation}</span></p>
						<p>Avg height: <span>{dataInfo.average_height}cm</span></p>
						<p>Skin colors: <span>{dataInfo.skin_colors}</span></p>
						<p>Hair colors: <span>{dataInfo.hair_colors}</span></p>
						<p>Eye colors: <span>{dataInfo.eye_colors}</span></p>
						<p>Avg lifespan: <span>{dataInfo.average_lifespan} years</span></p>
						<p>Language: <span>{dataInfo.language}</span></p>
						<DataInfoItem additionalData={additionalData} option={option} />
					</>
				);
			case 'vehicles':
				return (
					<>
						<h2>{dataInfo.name}</h2>
						<p>Model: <span>{dataInfo.model}</span></p>
						<p>Manufacturer: <span>{dataInfo.manufacturer}</span></p>
						<p>Cost: <span>{dataInfo.cost_in_credits}</span></p>
						<p>Length: <span>{dataInfo.length}m</span></p>
						<p>Max speed in atmosphere: <span>{dataInfo.max_atmosphering_speed}km/h</span></p>
						<p>Max Crew size: <span>{dataInfo.crew}</span></p>
						<p>Max Passenger size: <span>{dataInfo.passengers}</span></p>
						<p>Max total cargo capacity: <span>{dataInfo.cargo_capacity}kg</span></p>
						<p>Consumables: <span>{dataInfo.consumables}</span></p>
						<p>Vehicle class: <span>{dataInfo.vehicle_class}</span></p>
						<DataInfoItem additionalData={additionalData} option={option}  />
					</>
				);
			case 'starships':
				return (
					<>
						<h2>{dataInfo.name}</h2>
						<p>Model: <span>{dataInfo.model}</span></p>
						<p>Manufacturer: <span>{dataInfo.manufacturer}</span></p>
						<p>Cost: <span>{dataInfo.cost_in_credits}</span></p>
						<p>Length: <span>{dataInfo.length}m</span></p>
						<p>Max Speed in atmosphere: <span>{dataInfo.max_atmosphering_speed}km</span></p>
						<p>Average crew size: <span>{dataInfo.crew}</span></p>
						<p>Max Total Passengers: <span>{dataInfo.passengers} passengers</span></p>
						<p>Max Total Cargo Capacity: <span>{dataInfo.cargo_capacity}kg</span></p>
						<p>Consumables: <span>{dataInfo.consumables}</span></p>
						<p>Hyperdrive rating: <span>{dataInfo.hyperdrive_rating}</span></p>
						<p><span>{dataInfo.MGLT}</span> Megalight/h</p>
						<p>Starship classification: <span>{dataInfo.starship_class}</span></p>
						
						<DataInfoItem additionalData={additionalData} option={option} />

					</>
				);
		}
	}
}
