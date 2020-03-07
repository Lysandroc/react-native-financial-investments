import React, { useState, useEffect } from 'react';
import { ViewWrapper, OptionTouchable } from './styled';
import PropTypes from 'prop-types';
import Text from '../Text';

const options = [
	{ description: '1M', period: 1, label: 'periodo desde o ultimo mês' },
	{ description: '3M', period: 3, label: 'periodo desde os três últimos meses' },
	{ description: '1A', period: 12, label: 'periodo desde o ultimo ano' },
	{ description: '2A', period: 24, label: 'periodo desde os dois ultimos anos' },
	{ description: 'TODOS', period: 0, label: 'periodo desde do inicio' },
];

const ChartFilter = ({ setLabel }) => {
	const [filter, setFilter] = useState(options.find(({ period }) => period === 0));

	useEffect(() => {
		if (filter) {
			setLabel(filter.label);
		}
	}, [filter, setLabel]);

	return (
		<ViewWrapper>
			{options.map(option => (
				<OptionTouchable
					key={option.period}
					onPress={() => {
						setFilter(option);
					}}
					selected={filter.period === option.period}
				>
					<Text center dark>
						{option.description}
					</Text>
				</OptionTouchable>
			))}
		</ViewWrapper>
	);
};

ChartFilter.propTypes = {
	setLabel: PropTypes.func,
};

ChartFilter.defaultProps = {
	setLabel: () => {},
};

export default ChartFilter;
