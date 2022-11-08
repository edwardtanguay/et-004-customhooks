import { useState } from 'react';

export const PageUseToggle = () => {
	const [showAds, setShowAds] = useState(false);

	return (
		<>
			<p>The useToggle page.</p>
			<hr/>
			<button onClick={() => setShowAds(!showAds)}>Advertisements</button> {showAds ? 'Yes, show me ads' : 'No, do not show me ads.'}
		</>
	);
};