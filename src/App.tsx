import './App.scss';
import { PageUseFetch } from './components/PageUseFetch';
import { PageUseToggle } from './components/PageUseToggle';
import { PageWelcome } from './components/PageWelcome';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<h1>Custom Hooks Site</h1>

			<nav>
				<NavLink to="/welcome">Welcome</NavLink>
				<NavLink to="/useToggle">useToggle</NavLink>
				<NavLink to="/useFetch">useFetch</NavLink>
			</nav>

			<PageWelcome />
			<PageUseToggle />
			<PageUseFetch />
		</div>
	);
}

export default App;
