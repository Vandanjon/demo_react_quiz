import { Outlet } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";

import "./styles/style.scss";

export default function App() {
	return (
		<>
			<NavBar />

			<Outlet />

			<footer>
				<a href="https://www.vandanjon.com" target="_blank" rel="noreferrer">
					Lien vers le site DU BOSS
				</a>
			</footer>
		</>
	);
}
