import moment from 'moment';

export const toHashMap = data => {
	return data
		.map(([timestamp, yieldValue]) => ({ day: moment(timestamp).format('DD/MM/YYYY'), yieldValue }))
		.reduce((hashMap, { day, yieldValue }) => {
			const value = hashMap[day] && hashMap[day].yieldValue;
			const newYieldValue = value ? value + parseInt(yieldValue, 10) : parseInt(yieldValue, 10);
			return {
				...hashMap,
				[day]: {
					day,
					yieldValue: newYieldValue,
				},
			};
		}, {});
};
