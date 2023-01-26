import React from 'react';

export default function DataInfoItem({ additionalData, option }) {
	console.log(additionalData);
	if (option == 'planets') {
		return additionalData.map((item) => {
			if (item.name !== undefined) {
				return <p>Resident: {item.name}</p>;
			} else if (item.title !== undefined) {
				return <p>Movie Title: {item.title}</p>;
			}
		});
	} else if (option == 'films') {
		return additionalData.map((item) => {
			return <p>Name: {item.name}</p>;
		});
	} else if (option == 'species') {
		return additionalData.map((item) => {
			if (item.name !== undefined) {
				return <p>Name: {item.name}</p>;
			} else if (item.title !== undefined) {
				return <p>Movie Title: {item.title}</p>;
			}
		});
	} else if (option == 'vehicles') {
		return additionalData.map((item) => {
			if (item.name !== undefined) {
				return <p>Name: {item.name}</p>;
			} else if (item.title !== undefined) {
				return <p>Movie: {item.title}</p>;
			}
		});
	}
}
