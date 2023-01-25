import React from 'react';

export default function ResultItem({ item, option }) {
	if (option !== 'films') {
		return <>{item.name} </>;
	} else if (option === 'films') {
		return <>{item.title} </>;
	}
}
