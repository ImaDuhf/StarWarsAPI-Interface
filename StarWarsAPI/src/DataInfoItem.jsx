import React from 'react';

export default function DataInfoItem({ additionalData, option }) {
	console.log(additionalData);
	if (option == 'planets') {
		return additionalData.map((item, index) => {
			if (item.name !== undefined) {
				return <p key={index}>Resident: {item.name}</p>;
			} else if (item.title !== undefined) {
				return <p key={index}>Featured in: {item.title}</p>;
			}
		});
	} else if (option == 'films') {
		return additionalData.map((item, index) => {
			return <p key={index}>Name: {item.name}</p>;
		});
	} else if (option == 'species') {
		return additionalData.map((item, index) => {
			if (item.climate !== undefined) {
				return <p key={index}>Homeworld: {item.name}</p>
			} else if (item.name !== undefined) {
				return <p key={index}>Name: {item.name}</p>
			} else if (item.title !== undefined) {
				return <p key={index}>Featured in: {item.title}</p>
			}
		});
	} else if (option == 'vehicles') {
		return additionalData.map((item, index) => {
			if (item.name !== undefined) {
				return <p key={index}>Name: {item.name}</p>;
			} else if (item.title !== undefined) {
				return <p key={index}>Featured in: {item.title}</p>;
			}
		});
	} else if (option == 'people') {
		return additionalData.map((item, index) => {
			if (item.name !== undefined) {
				return <p key={index}>Homeworld: {item.name}</p>;
			} else if (item.title !== undefined) {
				return <p key={index}>Featured in: {item.title}</p>;
			}
		});
	} else if (option == 'starships') {
		return additionalData.map((item, index) => {
			if (item.name !== undefined) {
				return <p key={index}>Name: {item.name}</p>;
			} else if (item.title !== undefined) {
				return <p key={index}>Featured in: {item.title}</p>;
			}
		});
	}
}