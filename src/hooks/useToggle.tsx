import { useState } from 'react';

type Fn = () => void;

export const useToggle = (defaultValue: boolean) : [boolean, Fn, string]  => {
	const [value, setValue] = useState(defaultValue);

	const toggleValue = () => {
		setValue(!value);
	};

	const valueClass = value ? 'positive' : 'negative';

	return [value, toggleValue, valueClass];
};
