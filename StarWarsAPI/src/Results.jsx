import React from 'react';
import ResultItem from './ResultItem';

export default function Results({ data, option }) {
	while (option !== '') {
		return data.results.map((item) => {
			return (
				<div key={crypto.randomUUID()}>
					<ResultItem item={item} key={crypto.randomUUID()} option={option} />
				</div>
			);
		});
	}
}
