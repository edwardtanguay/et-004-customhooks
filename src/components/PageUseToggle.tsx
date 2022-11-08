import { useState } from 'react';

export const PageUseToggle = () => {
	const [showAds, setShowAds] = useState(false);

	return (
		 <div className="pageUseToggle">
			<p>The useToggle page.</p>
			<hr/>
			<button onClick={() => setShowAds(!showAds)}>Advertisements</button>{' '}
			<span className={showAds ? 'positive' : 'negative'}>
			{showAds ? 'Yes, show me ads' : 'No, do not show me ads.'}
			</span>	
		 </div>
	);
};