import { Link } from "react-router-dom";

import "./navbar.scss";

export default function Navbar() {
	return (
		<nav className="navbar">
			<div className="logo">SURVIE POST-APO</div>
			<div className="nav-links">
				<Link to="/" className="nav-link">
					Accueil
				</Link>

				<Link to="/quiz" className="nav-link">
					Test de survie
				</Link>
			</div>
		</nav>
	);
}
