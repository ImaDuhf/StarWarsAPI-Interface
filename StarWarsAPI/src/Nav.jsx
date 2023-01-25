import React from 'react';

export default function Nav({ setOption, getData }) {
	return (
		<nav className="nav">
			<button
				onClick={() => {
					getData('planets');
				}}
			>
				Planets
			</button>
			<button
				onClick={() => {
					getData('people');
				}}
			>
				Characters
			</button>
			<button
				onClick={() => {
					getData('films');
				}}
			>
				Films
			</button>
			<button
				onClick={() => {
					getData('species');
				}}
			>
				Species
			</button>
			<button
				onClick={() => {
					getData('vehicles');
				}}
			>
				Vehicles
			</button>
			<button
				onClick={() => {
					getData('starships');
				}}
			>
				Starships
			</button>
		</nav>
	);
}
