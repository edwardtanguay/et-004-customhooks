import { useState } from 'react';

export const useToggle = (defaultValue: boolean) => {
	const [value, setValue] = useState(defaultValue);

	const toggleValue = () => {
		setValue(!value);
	};

	const valueClass = value ? 'positive' : 'negative';

	return [value, toggleValue, valueClass];
};
