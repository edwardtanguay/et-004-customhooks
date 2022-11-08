import { useState } from 'react';

export const PageUseToggle = () => {
	const [showAds, setShowAds] = useState(false);
	const [sendMail, setSendMail] = useState(false);

	return (
		<div className="pageUseToggle">
			<p>The useToggle page.</p>
			<hr />
			<div className="toggleArea">
				<button onClick={() => setShowAds(!showAds)}>
					Advertisements
				</button>{' '}
				<span className={showAds ? 'positive' : 'negative'}>
					{showAds ? 'Yes, show me ads.' : 'No, do not show me ads.'}
				</span>
			</div>
			<div className="toggleArea">
				<button onClick={() => setSendMail(!sendMail)}>Mail</button>{' '}
				<span className={sendMail ? 'positive' : 'negative'}>
					{sendMail
						? 'Yes, send me mail.'
						: 'No, do not send me mail.'}
				</span>
			</div>
		</div>
	);
};
