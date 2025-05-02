import "./footer.scss";

export default function Footer() {
	return (
		<footer className="footer">
			<div className="footer-content">
				<span className="footer-text">© 2077 Vault-Tec Corporation</span>
				<div className="footer-links">
					<a href="https://www.vandanjon.com" className="footer-link">
						LE BOSS
					</a>
					<a href="https://fallout.bethesda.net/fr" className="footer-link">
						Manuel de survie
					</a>
				</div>
			</div>
		</footer>
	);
}
