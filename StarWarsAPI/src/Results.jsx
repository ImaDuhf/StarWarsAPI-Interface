import React from 'react';
import ResultItem from './ResultItem';

export default function Results({ data, option, showInfo }) {
	while (option !== '') {
		return data.results.map((item) => {
			return (
				<div key={crypto.randomUUID()} onClick={() => {showInfo(item)}}>
					<ResultItem item={item} key={crypto.randomUUID()} option={option} />
				</div>
			);
		});
	}
}
