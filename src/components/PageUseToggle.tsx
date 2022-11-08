import { useState } from 'react';
import { useToggle } from '../hooks/useToggle';

export const PageUseToggle = () => {
	const [showAds, toggleAds, adsClass] = useToggle(false);
	const [sendMail, toggleMail, mailClass] = useToggle(false);

	return (
		<div className="pageUseToggle">
			<p>The useToggle page.</p>
			<hr />

			<div className="toggleArea">
				<button onClick={toggleAds}>Advertisements</button>{' '}
				<span className={adsClass}>
					{showAds ? 'Yes, show me ads.' : 'No, do not show me ads.'}
				</span>
			</div>

			<div className="toggleArea">
				<button onClick={toggleMail}>Mail</button>{' '}
				<span className={mailClass}>
					{sendMail
						? 'Yes, send me mail.'
						: 'No, do not send me mail.'}
				</span>
			</div>
		</div>
	);
};
