import './App.scss';
import { PageUseFetch } from './components/PageUseFetch';
import { PageUseToggle } from './components/PageUseToggle';
import { PageWelcome } from './components/PageWelcome';

function App() {
	return (
		<div className="App">
			<h1>Custom Hooks Site</h1>

			<PageWelcome />
			<PageUseToggle />
			<PageUseFetch />
		</div>
	);
}

export default App;
